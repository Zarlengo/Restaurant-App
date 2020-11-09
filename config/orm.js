module.exports = (connection) => {
  return {
    selectAll: (tableInput, cb) => {
      const queryString = `SELECT * FROM ${ tableInput }`;
    
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
      
    },

    insertOne: (table, whereToInsert, whatToInsert, cb) => {
      const queryString = `INSERT INTO ${ table } (${ whereToInsert }) VALUES (${ whatToInsert })`;
      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },

    updateOne: (table, setObject, whereObj, cb) => {
      setColumn = Object.keys(setObject)[0];
      setValue = setObject[setColumn];

      whereColumn = Object.keys(whereObj)[0];
      whereValue = whereObj[whereColumn];
      
      const queryString = `UPDATE ${ table } SET ${ setColumn } = ${ setValue } WHERE ${ whereColumn } = ${ whereValue }`;

      connection.query(queryString, (err, result) => {
          if (err) throw err;
          cb(result);
        }
      );
    }
  }
};
