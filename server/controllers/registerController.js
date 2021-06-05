const { db, firebase } = require("../util/database");
const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  async registerUser(req, res) {
    const user = new User(req.body.username, req.body.password);
    user.hashPassword();
    console.log(user);
  },
};
