const express = require("express");
const router = express.Router();
const CodeDef = require("../models/CodeDef");

router.get("/", async (req, res) => {
  try {
    const code = await CodeDef.find().sort({ date: 1 });
    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

router.post("/search", async (req, res) => {
  console.log(req.body.query);
  try {
    query = [
      {
        $search: {
          compound: {
            should: [
              {
                text: {
                  path: "title",
                  query: req.body.query,
                  fuzzy: {
                    maxEdits: 1,
                    maxExpansions: 100,
                  },
                },
              },
              {
                text: {
                  path: "text",
                  query: req.body.query,
                  fuzzy: {
                    maxEdits: 1,
                    maxExpansions: 100,
                  },
                },
              },
            ],
            filter: [
              {
                term: {
                  query: req.body.filter,
                  path: "keywords",
                },
              },
            ],
          },
          highlight: { path: "title" },
        },
      },
      {
        $sort: { score: { $meta: "textScore" } },
      },

      {
        $project: {
          _id: 1,
          score: { $meta: "searchScore" },
          title: 1,
          text: 1,
          keywords: 1,
          highlights: { $meta: "searchHighlights" },
        },
      },
    ];

    const code = await CodeDef.aggregate(query);

    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newDef = new CodeDef(req.body);
    const definition = await newDef.save();
    res.json(definition);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const def = await CodeDef.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    await def.save();
    res.json(def);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const def = await CodeDef.findById(req.params.id);
    await def.remove();
    res.json(def);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
