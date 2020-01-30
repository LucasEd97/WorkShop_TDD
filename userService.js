const db = require('./model');
module.exports = {
  createUser: (user) => {
    return db.insertUser(user);
  }
}