const url = require('url')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')

// Create cached connection variable
let cachedDb = null

//Needed for process.env variables
dotenv.config();

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  answer = req.query.answer;
    question = req.query.question;
  const db = await connectToDatabase(process.env.MONGODB_URI)

  // Select the "users" collection from the database
  const collection = await db.collection('questions')

  await collection.updateOne(
      { "question" : req.query.question, "answers.answer_string" : req.query.answer},

      { $inc: {"answers.$.result" : 1}}
  )

  const result = await collection.findOne({"question" : req.query.question})


  res.status(200).json({result})
}