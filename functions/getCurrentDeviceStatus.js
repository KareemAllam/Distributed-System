function getCurrentDeviceStatus(err, msg, QueueName) {
  if (err) throw err;
  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  // console.log(msg);
  if (msg) {
    let result = JSON.parse(JSON.stringify(msg.content)).data;
    // console.log(result);
    switch (QueueName) {
      case "statusD1":
        process.env.DEVICE_STATUS_1 = (result[0] + result[1]) / 2;
        // console.log(
        //   `[${hours}:${min}:${sec}] Device1: ${process.env.DEVICE_STATUS_1}`
        // );
        break;
      case "statusD2":
        process.env.DEVICE_STATUS_2 = (result[0] + result[1]) / 2;
        // console.log(
        //   `[${hours}:${min}:${sec}] Device2: ${process.env.DEVICE_STATUS_2}`
        // );

        break;
      case "statusD3":
        process.env.DEVICE_STATUS_3 = (result[0] + result[1]) / 2;
        // console.log(
        //   `[${hours}:${min}:${sec}] Device3: ${process.env.DEVICE_STATUS_3}`
        // );
        break;
    }
  } else {
    switch (QueueName) {
      case "statusD1":
        process.env.DEVICE_STATUS_1 = 0;
        // console.log(
        //   `[${hours}:${min}:${sec}] Device1: ${process.env.DEVICE_STATUS_1}`
        // );
        break;
      case "statusD2":
        process.env.DEVICE_STATUS_2 = 0;
        // console.log(
        //   `[${hours}:${min}:${sec}] Device2: ${process.env.DEVICE_STATUS_2}`
        // );
        break;
      case "statusD3":
        process.env.DEVICE_STATUS_3 = 0;
        // console.log(
        //   `[${hours}:${min}:${sec}] Device3: ${process.env.DEVICE_STATUS_3}`
        // );
        break;
    }
  }
}
module.exports = getCurrentDeviceStatus;
