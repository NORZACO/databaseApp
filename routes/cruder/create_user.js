const pool = require('../connections');
const express = require('express');
const router = express.Router();


// const createUser = (request, response) => {
//   const { Firstname, Lastname, email, password } = request.body
//   const query = `INSERT INTO Members (Firstname, Lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
//   const values = [Firstname, Lastname, email, password];
//   pool.query(query, values, (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${results.rows[0].id}`)
//   })
// }


router.post('/', function (request, response) {
  const { Firstname, Lastname, email, password } = request.body;
  const query = `INSERT INTO Members (Firstname, Lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [Firstname, Lastname, email, password];
  pool.query(query, values, (error, result) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${result.rows[0].ID}`);
  });
})




module.exports = {

  'createUser': router
}