const r = require("rethinkdb");

async function handleCountRequest(period, callback) {
  r.connect({ host: "localhost", port: 28015 }, function(err, conn) {
    r.db("DS")
      .table("Dataset")
      .filter(
        r
          .row("year")
          .ge(period[0]) // greater that or equal
          .and(r.row("year").le(period[1])) // less than or equal
      )
      .count()
      .run(conn, function(err, result) {
        if (err) throw err;
        callback(result);
      });
  });
}

module.exports.handleCountRequest = handleCountRequest;
