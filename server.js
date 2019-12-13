const bodyParser = require("body-parser");
const express = require("express");
const axios = require("axios");
let ReceiveStatusFromRabbit = require("./functions/ReceiveStatusFromRabbit");
const ReceiveSumFromRabbit = require("./functions/ReceiveSumFromRabbit");

let {
  ReceiveFromRabbit,
  Result
} = require("./functions/ReceiveDataFromRabbit");

const app = express();

const Route = require("./routes/data");
const status = require("./routes/status");
const Port = 3000;
app.use(express.json());

//import Routes

//Route Middlewares
app.use("/api/data", Route);
app.use("/api/status", status);

app.listen(Port, function() {
  console.log(`Backend Server Started on Port: ${Port}!`);
  process.env.DEVICE_STATUS_1 = 0;
  process.env.DEVICE_STATUS_2 = 0;
  process.env.DEVICE_STATUS_3 = 0;
  // Status Handling
  ReceiveStatusFromRabbit("statusD1");
  ReceiveStatusFromRabbit("statusD2");
  ReceiveStatusFromRabbit("statusD3");
  ReceiveSumFromRabbit();

  // setInterval(() => {
  //   console.log("Device1: " + process.env.DEVICE_STATUS_1);
  //   console.log("Device2: " + process.env.DEVICE_STATUS_2);
  //   console.log("Device3: " + process.env.DEVICE_STATUS_3);
  //   console.log("------");
  // }, 1000);
});
