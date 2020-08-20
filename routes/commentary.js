const express = require("express");
const router = express.Router();
const Commentary = require("../models/Commentary");
const ItemCode = require("../models/ItemCode");
const CodeShow = require("../models/CodeShow");

// fetch all commentaries
router.get("/", async (req, res) => {
  try {
    const commentary = await Commentary.find();
    res.json(commentary);
  } catch (err) {}
});

// fetch all commentaries from a code

// itemCode: { $in: [req.params.id] },

router.get("/:id", async (req, res) => {
  try {
    const commentary = await Commentary.find({
      itemCode: req.params.id,
    });

    res.json(commentary);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  //   console.log(req.body);

  try {
    const newCommentary = new Commentary(req.body);
    const commentary = await newCommentary.save();
    res.json(commentary);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const commentary = await Commentary.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { returnOriginal: false }
    );

    await commentary.save();
    res.json(commentary);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const commentary = await Commentary.findById(req.params.id);

    await commentary.remove();
    res.json(commentary);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
