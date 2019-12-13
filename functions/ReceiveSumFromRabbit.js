var amqp = require("amqplib/callback_api");
const { handleCountRequest } = require("./handleRequest");

var counter = 0;
var sum = 0;

function AssignValue(value) {
  deviceStat1 = parseInt(process.env.DEVICE_STATUS_1);
  deviceStat2 = parseInt(process.env.DEVICE_STATUS_2);
  deviceStat3 = parseInt(process.env.DEVICE_STATUS_3);
  if (deviceStat1 === 0 || deviceStat2 === 0 || deviceStat3 === 0) {
    sum += value;
    counter += 1;
    if (counter == 2) {
      process.env.counter = counter.toString();
      process.env.Sum = sum;
      counter = 0;
      sum = 0;
    }
  } else {
    sum += value;
    counter += 1;
    if (counter == 3) {
      process.env.counter = counter.toString();
      process.env.Sum = sum;
      counter = 0;
      sum = 0;
    }
  }
}

function ReceiveSumFromRabbit() {
  amqp.connect("amqp://192.168.1.6", function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = "Sum";

      channel.assertQueue(queue, {
        durable: false
      });

      console.log(
        " [*] Waiting for messages in %s. To exit press CTRL+C",
        queue
      );

      channel.consume(
        queue,
        function(msg) {
          // console.log(JSON.parse(msg.content));
          AssignValue(JSON.parse(msg.content));
        },
        {
          noAck: true
        }
      );
    });
  });
}
module.exports = ReceiveSumFromRabbit;
