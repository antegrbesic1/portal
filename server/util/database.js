var firebase = require("firebase-admin");
var serviceAccount = require("./portal-49257-firebase-adminsdk-plhkr-fe1222ef02.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  storageBucket: "portal-49257.appspot.com",
});

const db = firebase.firestore();

module.exports = {
  db,
  firebase,
};
