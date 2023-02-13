

const DBdatabaseapp = {
    host: process.env.HOST || '127.0.0.1',
    user: process.env.USER || 'root',
    connectionLimit: process.env.CONNECTION_LIMIT || 10,
    password: process.env.PASSWORD || 'Passord1',
    database: process.env.DATABASE || 'databaseapp'
  };



  const DBsequelizeUser = {
    host: process.env.HOST || '127.0.0.1',
    user: process.env.USER || 'root',
    connectionLimit: process.env.CONNECTION_LIMIT || 10,
    password: process.env.PASSWORD || 'Passord1',
    database: process.env.DATABASE || 'sequelizedatabase'
  };


// exports
module.exports = {
    'DBdatabaseapp': DBdatabaseapp,
    'DBsequelizeUser' : DBsequelizeUser

}