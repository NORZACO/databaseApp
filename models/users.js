// The UserService class exports CRUD methods we can use in router files. It uses Sequelize to perform operations on the models.
// The Sequelize create() methods create a new instance of an object – it executes SQL INSERT query.
// The findAll() method performs the SELECT * query.
// The update() and destroy() methods execute PUT and DELETE queries.

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        firstName: Sequelize.DataTypes.STRING,
        lastName: Sequelize.DataTypes.STRING,
    });
    return User
}


// Path: routes\users.js export
