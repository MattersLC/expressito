const admin = require('firebase-admin');

const serviceAccount = require('../expressito-firebase-adminsdk-jphc2-be63fed227.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://expressito.firebaseio.com',
});

console.log("Conectando a firestore");

const db = admin.firestore();

module.exports = db;