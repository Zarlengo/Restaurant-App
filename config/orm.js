module.exports = (connection) => {
  return {
    selectAll: (tableInput, cb) => {
      const queryString = `SELECT * FROM ${ tableInput }`;
    
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
      
    },
    
    findBy: (tableInput, id_name, id_value, cb) => {
      const queryString = `SELECT * FROM ${ tableInput } WHERE ${ id_name } = ${ id_value }`;
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
      
    },

    insertOne: (table, whereToInsert, whatToInsert, table_id, cb) => {
      const queryString = `INSERT INTO ${ table } ("${ whereToInsert.join('", "')}") VALUES (${ whatToInsert.join(", ") }) RETURNING "${ table_id }"`;
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
