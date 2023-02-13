var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

// const { db } = require('./routes/users/get_user_by_id');
const { getUserById } = require('./routes/cruder/get_user_by_id');
const { getUsers } = require('./routes/cruder/get_users');
const { createUser } = require('./routes/cruder/create_user');
const { updateUser } = require('./routes/cruder/update_user');
const { deleteUser } = require('./routes/cruder/delete_user');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/users/users');
// var userRouterV = require('./routes/member');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/user', userRouter);
//user id
// app.use('/users/:id', userRouter);

// app.use('/users/:id', (req, res, next) => {
//   switch(req.params.id) {
//     case 'John':
//     case 'Barbara':
//     case 'Jamie':
//     case 'Patrick':
//     case 'Bruker1':
//       userRouter(req, res, next);
//       break;
//     default:
//       res.status(404).send('User not found');
//       break;
//   }
// });




// app.use('/users' , getUsers)
// app.use('/users/:id', getUserById)
// app.use('/create', createUser)
// app.use('/users/:id', updateUser)
// app.use('/users/:id', deleteUser)
// app.use('/', userRouterV);

// app.use('/member', getUsers);
// app.use('/member/:id', getUserById);
// app.use('/member', createUser);
// app.use('/member/:id', updateUser);
// app.use('/member/:id', deleteUser);
// app.use('/admin', getUsers);
// app.use('/admin/:id', getUserById);







// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
