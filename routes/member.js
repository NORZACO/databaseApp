const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

connection.connect();

// Route to get all members
router.get('/', (req, res) => {
  connection.query('SELECT * FROM Members', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// Route to get a single member by ID
router.get('/:id', (req, res) => {
  connection.query('SELECT * FROM Members WHERE ID = ?', [req.params.id], (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

// Route to add a new member
router.post('/', (req, res) => {
  const member = req.body;
  connection.query('INSERT INTO Members SET ?', member, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// Route to update an existing member
router.put('/:id', (req, res) => {
  const member = req.body;
  connection.query('UPDATE Members SET Firstname = ?, Lastname = ?, email = ?, password = ? WHERE ID = ?', [member.Firstname, member.Lastname, member.email, member.password, req.params.id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// Route to delete a member
router.delete('/:id', (req, res) => {
  connection.query('DELETE FROM Members WHERE ID = ?', [req.params.id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

module.exports = router;
