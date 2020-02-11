const url = require('url')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')

let cachedDb = null;

dotenv.config();

async function connectToDatabase(uri) {
  
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

module.exports = async (req, res) => {
  answer = req.query.answer;
    question = req.query.question;
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = await db.collection('questions');

  await collection.updateOne(
      { "question" : req.query.question, "answers.answer_string" : req.query.answer},

      { $inc: {"answers.$.result" : 1}}
  );

  const result = await collection.findOne({"question" : req.query.question});


  res.status(200).json({result});
}