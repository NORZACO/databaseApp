
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const pool = require('../connections');
const sql = require('mysql2');






var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

/* GET users listing. 
router.get('/x', function (req, res, next) {
  let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
  res.render('users', { users: users });
});



router.get('/', function (req, res, next) {
  connectDb.query('SELECT 1 as number', (err, result) => {
    if (err) console.log(err)
    console.dir(result)
  })
  let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
  // console.log(users);
  res.render('users', { users: users });
});



router.get('/', function (req, res, next) {
  pool.query('SELECT * FROM Users', (err, result) => {
    console.dir(result);
    // let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
    // console.log(users)
    res.render('users', { users: result });
  });
});

*/

router.get('/', function (req, res, next) {
  pool.query('SELECT * FROM Users', (err, results) => {
    if (err) return next(err);
    res.render('users', { users: results });
  });
});


/*
router.post('/', jsonParser, function (req, res, next) {
  let toAddArray = req.body.users;
  const query = 'INSERT INTO Users(FirstName, LastName) VALUES ' + toAddArray.map(user => `('${user.FirstName}','${user.LastName}')`).toString();
  console.log(query);
  pool.query(query, (err, data) => {
    console.dir(data);
    res.end()
  });
});


Wrapping the function in an async function and using await when executing the query to make the code easier to read and to handle errors more effectively.
Escaping the values to prevent SQL injection attacks
Replacing .toString() with .join(', ') to construct the query string in a safer and cleaner way.
Adding error handling in case the query fails.


INSERT INTO Users(FirstName, LastName) VALUES ('Kendrick','Lamar'),('Drake','Graham'),('J. Cole','Cole'),('Travis','Scott'),('Kanye','West')
ResultSetHeader {
  fieldCount: 0,
  affectedRows: 5,
  insertId: 9,
  info: 'Records: 5  Duplicates: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0
}

router.post('/', jsonParser, function(req, res, next) {
  let toAddArray = req.body.users;
  const query = 'INSERT INTO Users(FirstName, LastName) VALUES ' + toAddArray.map(user => `('${user.FirstName}','${user.LastName}')`).toString();
  console.log(query);
  pool.query(query, (err, result) => {
    console.dir(result);
    res.end()
  })
});



router.post('/', jsonParser, function (req, res, next) {
  let toAddArray = req.body.users;
  const query = 'INSERT INTO Users(FirstName, LastName) VALUES ' + toAddArray.map(user => `('${user.FirstName}','${user.LastName}')`).toString();
  // const query = 'INSERT INTO Users(FirstName, LastName) VALUES ' + toAddArray.map(user => (`${user.FirstName}`, `${user.LastName}`)).toString();
  console.log(query);
  pool.query(query, (err, result) => {
    console.dir(result);
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'Failed to insert users to the database'
      });
    } else {
      console.log('Users added successfully');
      res.status(200).json({
        message: 'Users added successfully'
      });
    }
  })
});

*/


router.delete('/:userId', function (req, res, next) {
  const userId = req.params.userId;
  const query = `DELETE FROM Users WHERE UserID' = ${userId}`;
  console.log(query);
  pool.query(query, (err, result) => {
    console.dir(result);
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'Failed to delete user from the database'
      });
    } else {
      console.log('User deleted successfully');
      res.status(200).json({
        message: 'User deleted successfully'
      });
    }
  })
});




// router.post('/', jsonParser, function (req, res, next) {
//   let toAddArray = req.body.users;
//   let queryValues = toAddArray.map(user => `(${pool.escape(user.FirstName)}, ${pool.escape(user.LastName)})`).join(',');
//   const query = `INSERT INTO Users(FirstName, LastName) VALUES ${queryValues}`;
//   console.log(query);
//   pool.query(query, (err, data) => {
//     if (err) return next(err);
//     console.dir(data);
//     res.status(200).send({ message: 'Users added successfully' }).end();
//   });
// });


const createRouter = (request, response) => {
  const { username, email, password, biograph, description } = request.body;

  // validate inputs
  if (!username || !email || !password) {
    response.status(400).send("Username, email and password are required fields");
    return;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    response.status(400).send("Invalid email address");
    return;
  }
  if (password.length < 8) {
    response.status(400).send("Password must be at least 8 characters long");
    return;
  }

  const query = `INSERT INTO users (username, email, password, biograph, description) VALUES ($1, $2, $3, $4, $5)`;
  const values = [username, email, password, biograph, description];

  databaseConnection.query(query, values, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User ${username} created with email: ${email}`);
  });
};

module.exports = router;