const express = require("express");
const router = express.Router();
const CodeShow = require("../models/CodeShow");

router.get("/", async (req, res) => {
  try {
    const code = await CodeShow.find().sort({ date: 1 });
    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

router.post("/search", async (req, res) => {
  try {
    // const code = await CodeShow.find({
    //   $text: { $search: "change" },
    // });

    // text: { path: "keywords", query: "essaie" },
    // text: { path: "title", query: "essaie" },

    // regex: {
    //   path: "keywords",
    //   query: "(.) [css]",
    // },

    //

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
          keywords: 1,
          highlights: { $meta: "searchHighlights" },
        },
      },
    ];

    const code = await CodeShow.aggregate(query);

    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newCode = new CodeShow(req.body);
    const code = await newCode.save();
    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const code = await CodeShow.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    await code.save();
    res.json(code);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const code = await CodeShow.findById(req.params.id);
    await code.remove();
    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
