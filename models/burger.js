const orm = require("../config/orm");

let burger = {
  all: function (cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  create: function (burgerName, cb) {
    orm.insertOne(burgerName, (res) => {
      cb(res);
    });
  },
  update: function (burgerId, cb) {
    orm.updateOne(burgerId, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
