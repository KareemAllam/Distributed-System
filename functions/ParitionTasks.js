const SendDataToRabbit = require("../functions/SendDataToRabbit");

function ParitionTasks(D0, D1, D2) {
  process.env.counter = "0";
  // console.log(D0, D1, D2);
  // Sending Data to Slaves
  if (D0 != 0) SendDataToRabbit("dataD1", D0);
  if (D1 != 0) SendDataToRabbit("dataD2", D1);
  if (D2 != 0) SendDataToRabbit("dataD3", D2);

  // Receiving Data from Slaves
  setTimeout(() => {}, 400);
}

module.exports = ParitionTasks;
