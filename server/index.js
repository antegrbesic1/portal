//Import controllera
const vijestiController = require("./controllers/vijestiController");
const loginController = require("./controllers/loginController");
const registerController = require("./controllers/registerController");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");
const cors = require("cors");
const path = require("path");
const { db, firebase } = require("./util/database");
const Vijest = require("./models/Vijest");
app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.post("/addnews", vijestiController.dodajVijest);

app.post("/login", loginController.provjeriLogin);

app.get("/vijesti", vijestiController.dohvatiVijesti);

app.post("/register", registerController.registerUser);

app.post("/usernamecheck", loginController.usernameCheck);

app.use("/", serveStatic(path.join(__dirname, "/public")));

app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on ${port} `);
});
