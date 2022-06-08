const express = require("express");
const cors = require("cors")
const { MongoClient } = require("mongodb")
require("dotenv").config();


const app = express();
const port = process.env.PORT;
const client = new MongoClient(process.env.MONGO_DB_URI)

app.use(cors());
app.use(express.json());


app.get("/users", async (req, res) => {
    try {
    const con = await client.connect();
    const users = await con.db('caoMongoDB').collection('people').find().toArray();
    await con.close();
    return res.send(users);
    } catch(error) {
        res.status(500).send(error);
    }
  });


  app.post('/users', async (req, res)=>{
  try {
  const con = await client.connect();
  const add = await con.db("caoMongoDB").collection("people")
  .insertOne(req.body);
    con.close();
    res.send(add);
    console.log("asd")
  } catch (error) {
    res.status(500).send(error);
  }
});
  

  app.listen(port, () => console.log(`Port: ${port}`));