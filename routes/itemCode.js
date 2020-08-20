const express = require("express");
const router = express.Router();
const ItemCode = require("../models/ItemCode");

// fetch all codes
router.get("/", async (req, res) => {
  try {
    const code = await ItemCode.find();
    res.json(code);
  } catch (err) {}
});

// fetch all codes from a topic

router.get("/:id", async (req, res) => {
  try {
    const code = await ItemCode.find({
      codeShow: req.params.id,
    });

    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newItem = new ItemCode(req.body);
    const code = await newItem.save();
    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const code = await ItemCode.findOneAndUpdate(
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
    const code = await ItemCode.findById(req.params.id);
    await code.remove();
    res.json(code);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
