var connection = require("../config/connection.js");
let orm = {
  selectAll: function (tableInput, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function (burgerName, cb) {
    let queryString =
      "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);";
    connection.query(queryString, [burgerName], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  updateOne: function (burgersId, cb) {
    let queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
    connection.query(queryString, [burgersId], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
};

module.exports = orm;
