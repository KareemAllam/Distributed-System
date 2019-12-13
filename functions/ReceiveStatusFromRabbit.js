var amqp = require("amqplib/callback_api");
const getCurrentDeviceStatus = require("./getCurrentDeviceStatus");
function ReceiveStatusFromRabbit(QueueName) {
  amqp.connect("amqp://192.168.1.6", function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = QueueName;

      console.log(
        " [*] Waiting for messages in %s. To exit press CTRL+C",
        queue
      );
      channel.assertQueue(queue, { durable: false });
      setInterval(() => {
        channel.checkQueue(queue, function(err, ok) {
          if (err) channel.assertQueue(queue, { durable: false });
          else qInfo = ok;
        });

        channel.get(
          queue,
          {
            noAck: true
          },
          (err, msg) => {
            getCurrentDeviceStatus(err, msg, QueueName);
          }
        );
      }, 5000);
    });
  });
}
module.exports = ReceiveStatusFromRabbit;
