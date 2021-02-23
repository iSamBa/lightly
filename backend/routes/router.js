const express = require("express");
const router = express.Router();
const hubsRouter = require("./hubs-router");
const devicesRouter = require("./devices-router");
const roomsRouter = require("./rooms-router");
const scenesRouter = require("./scenes-router");

router.use(express.json());

router.use("/hubs", hubsRouter);
router.use("/devices", devicesRouter);
router.use("/rooms", roomsRouter);
router.use("/scenes", scenesRouter);

router.get("/", (req, res) => {
  res.status(200).send("apiRouter : home route");
});

module.exports = router;
