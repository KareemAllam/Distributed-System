const router = require("express").Router();
const axios = require("axios");
const fs = require("fs");

process.env.DEVICE_STATUS_1 = 0;
process.env.DEVICE_STATUS_2 = 0;
process.env.DEVICE_STATUS_3 = 0;

router.post("/:id", async (req, res) => {
  if (req.params.id == 1) {
    process.env.DEVICE_STATUS_1 = (req.body.cpu + req.body.memory) / 2;
  }
  if (req.params.id == 2) {
    process.env.DEVICE_STATUS_2 = (req.body.cpu + req.body.memory) / 2;
  }
  if (req.params.id == 3) {
    process.env.DEVICE_STATUS_3 = (req.body.cpu + req.body.memory) / 2;
  }

  console.log("Device1: " + process.env.DEVICE_STATUS_1);
  console.log("Device2: " + process.env.DEVICE_STATUS_2);
  console.log("Device3: " + process.env.DEVICE_STATUS_3);
  console.log("------");
});
module.exports = router;
