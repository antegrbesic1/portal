const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../util/config");
class User {
  constructor(username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }
  hashPassword() {
    bcrypt.hash(this.password, 10).then((hash) => {
      console.log(hash);
    });
  }
  checkPassword(password) {
    //... fetch user from a db etc.
    return bcrypt.compareSync(password, this.password);
  }
  generateToken() {
    return jwt.sign(
      { username: this.username, password: this.password },
      config.authentication.jwtSecret,
      {
        expiresIn: "7d", // expires in 7 days
      }
    );
  }
}

module.exports = User;
