module.exports = (client) => {
var orm = require("../config/orm.js")(client);

  return  {
    burger: {
      all: (cb) => {
        orm.selectAll("burgers", (res) => {
          cb(res);
        });
      },
      findBy: (col, id, join, cb) => {
        orm.findBy("burgers", col, id, join, (res) => {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      create: (cols, vals, id, cb) => {
        orm.insertOne("burgers", cols, vals, id, (res) => {
          cb(res);
        });
      },
      update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
          cb(res);
        });
      }
    },
    menu: {
      all: (cb) => {
        orm.selectAll("menu", (res) => {
          cb(res);
        });
      },
      findBy: (col, id,  join, cb) => {
        orm.findBy("menu", col, id, join, (res) => {
          cb(res);
        });
      }
    }
  }
}