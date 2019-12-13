export function InsertData() {
  var dataset = require("./dataset.json");
  r.connect({ host: "localhost", port: 28015 }, function(err, conn) {
    r.db("DS")
      .table("Dataset")
      .insert(dataset)
      .run(conn, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
      });
  });
}
