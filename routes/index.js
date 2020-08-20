const express = require("express");
const router = express.Router();

const itemCode = require("./itemCode");
const codeShow = require("./codeShow");
const commentary = require("./commentary");
const definition = require("./codeDef");
const website = require("./codeWeb");
const videos = require("./codeVid");

router.use("/videos", videos);
router.use("/websites", website);
router.use("/definitions", definition);
router.use("/commentary", commentary);
router.use("/itemcode", itemCode);
router.use("/codeshow", codeShow);

module.exports = router;
