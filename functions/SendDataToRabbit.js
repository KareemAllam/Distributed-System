var amqp = require("amqplib/callback_api");

function SendDataToRabbit(Queue, Data) {
  amqp.connect("amqp://192.168.1.6", function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      // console.log(Data);
      var queue = Queue;
      var msg = JSON.stringify(Data);

      channel.assertQueue(queue, {
        durable: false
      });

      channel.sendToQueue(queue, Buffer.from(msg));

      switch (Queue) {
        case "dataD1":
          console.log(
            ` [x] Sent ${msg} to Device1 with performance: ${process.env.DEVICE_STATUS_1}%`
          );
          break;
        case "dataD2":
          console.log(
            ` [x] Sent ${msg} to Device2 with performance: ${process.env.DEVICE_STATUS_2}%`
          );
          break;
        case "dataD3":
          console.log(
            ` [x] Sent ${msg} to Device3 with performance: ${process.env.DEVICE_STATUS_3}%`
          );
          break;
      }
    });
    setTimeout(function() {
      connection.close();
    }, 500);
  });
}

module.exports = SendDataToRabbit;
