var amqp = require("amqplib/callback_api");

function send(Queue) {
  amqp.connect("amqp://192.168.1.6", function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = Queue;
      var memory = Math.floor(Math.random() * 100);
      var cpu = Math.floor(Math.random() * 100);
      var msg = [cpu, memory];

      channel.assertQueue(queue, {
        durable: false
      });

      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(` [x] Sent ${msg} to ${queue} `);
    });
    setTimeout(function() {
      connection.close();
    }, 500);
  });
}

module.exports = send;
