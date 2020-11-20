module.exports = (connection) => {
  return {
    selectAll: (tableInput, cb) => {
      const queryString = `SELECT * FROM ${ tableInput }`;
    
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
      
    },
    
    findBy: (tableInput, id_name, id_value, left_join, cb) => {
      let join_string = "";
      if ( left_join ) {
        join_string = "LEFT JOIN MENU ON MENU.menu_id = BURGERS.menu_id "
      }
      const queryString = `SELECT * FROM ${ tableInput } ${ join_string } WHERE ${ id_name } = ${ id_value }`;
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
