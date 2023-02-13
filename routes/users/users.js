
// var express = require('express');
// var router = express.Router();
// var UserService = require("../../services/UsersService")
// var db = require("../../models/index")



// var userService = new UserService(db);



// // router.get('/', async function (req, res, next) {
// //     users = await userService.getAll()
// //     res.render('users/users', { users: users });
// // })


// // router.get('/', function (req, res, next) {
// //     res.render('users/create_user');
// // })


var express = require('express');
var router = express.Router();
var UserService = require("../../services/UsersService")
var db = require("../../models/index")
var userService = new UserService(db);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()








router.get('/', async function(req, res, next) {
    users = await userService.getAll()
    res.render('users/users', {users: users});
  })
  
  router.post('/', jsonParser, async function(req, res, next) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    await userService.create(firstName, lastName);
    res.end()
  });
  
  router.delete('/', jsonParser, async function(req, res, next) {
    let id = req.body.id;
    await userService.deleteUser(id);
    res.end()
  });
  
  router.put('/', jsonParser, async function(req, res, next) {
    let firstName = req.body.firstName;
    let id = req.body.id;
    await userService.changeFirstName(id, firstName);
    res.end()
  });
  

module.exports = router;