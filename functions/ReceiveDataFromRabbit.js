var amqp = require("amqplib/callback_api");
const { handleCountRequest } = require("./handleRequest");
const SendSumToRabbit = require("./SendSumToRabbit");

function ReceiveDataFromRabbit(QueueName) {
  amqp.connect("amqp://192.168.1.6", function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = QueueName;

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
          handleCountRequest(JSON.parse(msg.content), result => {
            console.log(result);
            SendSumToRabbit(result);
          });
        },
        {
          noAck: true
        }
      );
    });
  });
}
module.exports = ReceiveDataFromRabbit;
