const { db, firebase } = require("../util/database");
const bcrypt = require("bcrypt");
const User = require("../models/User");
module.exports = {
  async provjeriLogin(req, res) {
    const usernameRef = db.collection("users");
    var user = new User();
    var docs;
    await usernameRef
      .where("username", "==", req.body.username)
      .get()
      .then((querySnapshot) => {
        docs = querySnapshot.docs;
      });
    docs.forEach((element) => {
      user.username = element.data().username;
      user.password = element.data().password;
      user.isAdmin = element.data().isAdmin;
    });
    var valid = await user.checkPassword(req.body.password);
    var token = user.generateToken();
    console.log(valid);
    console.log(token);
    res.send({
      user,
    });
  },
  async usernameCheck(req, res) {
    console.log("Hitan sam");
    const usernameRef = db.collection("users");
    const snapshot = await usernameRef
      .where("username", "==", req.body.username)
      .get();
    if (snapshot.empty) {
      res.send({
        valid: true,
      });
    } else {
      res.send({
        valid: false,
      });
    }
  },
};
