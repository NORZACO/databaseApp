const mysql = require('mysql2')

// const pool = new sql.createPool({
//   database: 'databaseapp',
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: 'P@ssw0rd'
// })


// const pool = new mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   connectionLimit: 10,
//   password: 'Passord1',
//   database: 'databaseapp'
// });





// Path: routes\users.js export
// export connection


const { DBsequelizeUser, DBdatabaseapp} = require('../configuration');

const pool_DBdatabaseapp = new mysql.createPool(DBdatabaseapp);
const pool_DBsequelizeUser = new mysql.createPool(DBsequelizeUser);

//connection
// const connection = pool_DBsequelizeUser.getConnection();
//connection
// const connection = pool_DBdatabaseapp.getConnection();








module.exports = {
  'pool': pool_DBdatabaseapp,
  'pool2': pool_DBsequelizeUser
}