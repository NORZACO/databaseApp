var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
const sql = require('mysql2');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


const { pool } = require('../routes/connections');
const { Sequelize, Model, DataTypes } = require('sequelize');
const { DBsequelizeUser, DBdatabaseapp } = require('../configuration');



initialize()
async function initialize() {
  connection = {
    dialect: "mysql",
    dialectModel: "mysql2",
    DBsequelizeUser
  }





  initialize()

  async function initialize() {
    connection = {
      dialect: "mysql",
      dialectModel: "mysql2",
      database: DBsequelizeUser.database,
      username: "sequelizeUser",
      password: DBsequelizeUser.password,
      host: DBsequelizeUser.host,
      // DBsequelizeUser
    }
    console.log(connection);

    // connect to db
    const sequelize = new Sequelize(connection);

    // init models and add them to the exported db object
    const User = sequelize.define('User', {
      username: DataTypes.STRING,
      birthday: DataTypes.DATE,
    });

    // sync all models with database
    await sequelize.sync({ alter: true });
  }
}


/* GET users listing. */
router.get('/', function (req, res, next) {
  pool.query('SELECT * FROM Users', (err, data) => {
    res.render('users', { users: data });
  })
});




router.post('/', jsonParser, function (req, res, next) {
  let toAddArray = req.body.users;
  let values = toAddArray.map(user => `('${user.FirstName}','${user.LastName}')`).toString();
  let query = `INSERT INTO Users(FirstName, LastName) VALUES ${values}`;
  console.log(query);
  pool.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "Failed to add users" });
    } else {
      console.dir(data);
      res.send({ message: "Users added successfully" });
    }
  });
});


module.exports = router;