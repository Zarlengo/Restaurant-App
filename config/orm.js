const connection = require("./connection.js");

module.exports = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (table, whereToInsert, whatToInsert, cb) => {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [table, whereToInsert, whatToInsert], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: (table, setObject, whereObj, cb) => {
    setColumn = Object.keys(setObject)[0];
    setValue = setObject[setColumn];

    whereColumn = Object.keys(whereObj)[0];
    whereValue = whereObj[whereColumn];
    
    const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(
      queryString,
      [table, setColumn, setValue, whereColumn, whereValue],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};
