function PartitionData(period) {
  const start = period[0];
  const end = period[1];
  const length = end - start + 1;
  deviceStat1 = parseInt(process.env.DEVICE_STATUS_1);
  deviceStat2 = parseInt(process.env.DEVICE_STATUS_2);
  deviceStat3 = parseInt(process.env.DEVICE_STATUS_3);
  console.log(deviceStat1, deviceStat2, deviceStat3);
  if (deviceStat1 === 0 || deviceStat2 === 0 || deviceStat3 === 0) {
    console.log("2 devices");
    var parts = Math.floor(length / 2);
    var Dat0 = [start, start + parts - 1];
    var Dat1 = [start + parts, end];

    if (deviceStat1 == 0) {
      data0 = 0;
      if (deviceStat2 > deviceStat3) {
        if (Dat0.length > Dat1.length) {
          data1 = Dat0;
          data2 = Dat1;
        } else {
          data1 = Dat1;
          data2 = Dat0;
        }
      }
    } else if (deviceStat2 == 0) {
      data1 = 0;
      if (deviceStat1 > deviceStat3) {
        if (Dat0.length > Dat1.length) {
          data0 = Dat0;
          data2 = Dat1;
        } else {
          data0 = Dat1;
          data2 = Dat0;
        }
      }
    } else if (deviceStat3 == 0) {
      data2 = 0;
      if (deviceStat1 > deviceStat2) {
        if (Dat0.length > Dat1.length) {
          data0 = Dat0;
          data1 = Dat1;
        } else {
          data0 = Dat1;
          data1 = Dat0;
        }
      }
    }
  } else {
    console.log("3 devices");

    if (length % 3 == 0) {
      // length / 3 = 6/9/12/15/18...
      // ex: 2000 -> 2005
      var parts = Math.floor(length / 3);
      var data0 = [start, start + parts - 1]; // 2000 -> 2001
      var data1 = [start + parts, start + parts * 2 - 1]; // 2002 ->2003
      var data2 = [start + parts * 2, end]; // 2004 -> 2005
    }

    if (length % 3 == 1) {
      // length / 3 = 4/7/9
      // ex 2000 -> 2006
      var parts = Math.floor(length / 3);
      if (deviceStat1 > deviceStat2 && deviceStat1 > deviceStat3) {
        var data2 = [start, start + parts - 1]; // 2000 -> 2001
        var data1 = [start + parts, start + parts * 2 - 1]; // 2002 -> 2003
        var data0 = [start + parts * 2, end]; // 2004 -> 2006
      }
      if (deviceStat2 > deviceStat3 && deviceStat2 > deviceStat1) {
        var data0 = [start, start + parts - 1]; // 2000 -> 2001
        var data2 = [start + parts, start + parts * 2 - 1]; // 2002 -> 2003
        var data1 = [start + parts * 2, end]; // 2004 -> 2006
      }
      if (deviceStat3 > deviceStat1 && deviceStat3 > deviceStat2) {
        var data0 = [start, start + parts - 1]; // 2000 -> 2001
        var data1 = [start + parts, start + parts * 2 - 1]; // 2002 -> 2003
        var data2 = [start + parts * 2, end]; // 2004 -> 2006
      }
    }

    if (length % 3 == 2) {
      // length / 3 = 8
      // ex 2000 -> 2007
      var parts = Math.ceil(length / 3);
      if (deviceStat1 < deviceStat2 && deviceStat1 < deviceStat3) {
        var data0 = [start, start + parts - 1]; // 2000 -> 2002
        var data1 = [start + parts, start + parts * 2 - 1]; // 2003 -> 2005
        var data2 = [start + parts * 2, end]; // 2006 -> 2007
      }
      if (deviceStat2 < deviceStat3 && deviceStat2 < deviceStat1) {
        var data2 = [start, start + parts - 1]; // 2000 -> 2002
        var data0 = [start + parts, start + parts * 2 - 1]; // 2003 -> 2005
        var data1 = [start + parts * 2, end]; // 2006 -> 2007
      }
      if (deviceStat3 < deviceStat1 && deviceStat3 < deviceStat2) {
        var data0 = [start, start + parts - 1]; // 2000 -> 2002
        var data1 = [start + parts, start + parts * 2 - 1]; // 2003 -> 2005
        var data2 = [start + parts * 2, end]; // 2006 -> 2007
      }
    }
  }

  return { data0: data0, data1: data1, data2: data2 };
}

module.exports = PartitionData;
