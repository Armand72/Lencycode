const express = require("express");
const router = express.Router();
const CodeVid = require("../models/CodeVid");

router.get("/", async (req, res) => {
  try {
    const videos = await CodeVid.find().sort({ date: 1 });
    res.json(videos);
  } catch (err) {
    console.log(err);
  }
});

router.post("/search", async (req, res) => {
  try {
    var regex = new RegExp(req.body.regex, "g");

    const video = await CodeVid.find({ author: regex });

    res.json(video);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newVideo = new CodeVid(req.body);
    const video = await newVideo.save();
    res.json(video);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const video = await CodeVid.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    await video.save();
    res.json(video);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const video = await CodeVid.findById(req.params.id);
    await video.remove();
    res.json(video);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
