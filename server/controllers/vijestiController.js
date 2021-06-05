const { db, firebase } = require("../util/database");

module.exports = {
  async dohvatiVijesti(req, res) {
    let query = db.collection("vijesti");
    let response = [];
    await query.get().then((querySnapshot) => {
      let docs = querySnapshot.docs;
      docs.forEach((element) => {
        response.push(element.data());
      });
    });
    res.send(response);
  },
  async dodajVijest(req, res) {
    await db.collection("vijesti").add(req.body);
  },
};
