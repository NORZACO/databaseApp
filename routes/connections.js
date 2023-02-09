const mysql = require('mysql2')

// const pool = new sql.createPool({
//   database: 'databaseapp',
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: 'P@ssw0rd'
// })


const pool = new mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  connectionLimit: 10,
  password: 'Passord1',
  database: 'databaseapp'
});





// Path: routes\users.js export
// export connection


module.exports = pool;