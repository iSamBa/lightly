const express = require("express");
const router = express.Router();
const bridgesRouter = require("./bridges-router");
const devicesRouter = require("./devices-router");
const roomsRouter = require("./rooms-router");
const scenesRouter = require("./scenes-router");

router.use(express.json());

router.use("/bridges", bridgesRouter);
router.use("/devices", devicesRouter);
router.use("/rooms", roomsRouter);
router.use("/scenes", scenesRouter);

router.get("/", (req, res) => {
  res.status(200).send("apiRouter : home route");
});

module.exports = router;
