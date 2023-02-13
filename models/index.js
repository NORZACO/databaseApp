const Sequelize = require('sequelize');
const { DBsequelizeUser, MYSQLdialects } = require('../configuration');
// dotenv
// const dotenv = require('dotenv');
require('dotenv').config()


// Define the database connection details
// const dialect = MYSQLdialects.mysql
const dialect =  process.env.MYSQL
const dbName = DBsequelizeUser.database
const userName = DBsequelizeUser.username || 'sequelizeUser'
const password = DBsequelizeUser.password





// Initialize a new Sequelize instance and store it in the `db` object
const db = {};
const sequelize = new Sequelize(dbName, userName, password, { dialect });

// Assign the sequelize instance to the `db` object
db.sequelize = sequelize;

// Load the `users` model and assign it to the `db` object
db.users = require("./users.js")(sequelize, Sequelize);

// Sync the database schema with the sequelize models
sequelize.sync({ alter: true });

// Export the `db` object as the module
module.exports = db;

// console.log('db', db);