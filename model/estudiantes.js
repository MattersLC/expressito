const db = require('./firebase');

const docs = await db.collection('estudiantes').get();

docs.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});
