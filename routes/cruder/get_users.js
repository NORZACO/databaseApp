const pool = require('../connections');
const express = require('express');
const router = express.Router();




// GET all users
// Our first endpoint will be a GET request. We can put the raw SQL that will touch the api database inside the pool.query().
//  We’ll SELECT all users and order by ID.

router.get('/', function (request, response) {
  pool.query('SELECT * FROM Members ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.render('users', { users : results });
  })
})


// function getUsers(req, res, next) {
//   pool.query('SELECT * FROM Users', (err, data) => {
//     if (err) return next(err);
//     res.render('users', { users: data });
//   });
// }







module.exports = {
  'getUsers' : router

}