const router = require("express").Router();
const ParitionTasks = require("../functions/ParitionTasks");
const PartitionData = require("../functions/PartitionData");

router.post("/sum", async (req, res) => {
  var { data0, data1, data2 } = PartitionData(req.body.Period);
  // console.log(" D0: " + data0, "\n D1: " + data1, "\n D2: " + data2);
  ParitionTasks(data0, data1, data2);
  setTimeout(() => {
    res.send("Sum= " + parseInt(process.env.Sum));
  }, 1000);
});

module.exports = router;
