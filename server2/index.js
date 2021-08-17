
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const {client} = require('./db')

// allow access to other urls //
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   next();
 });

 // read database //
 async function readmeows() {
   try {
     const results = await client.query("select id, content from meows")
     return results.rows;
     console.log(results);
   }
   catch(err){
     console.log('err', err)
     return []
   }
 }

// GET API //
  app.get("/meows", async (req, res) => {
    const results = await readmeows();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(results))
  })

//  //
app.listen(8080, () => console.log("server listening to 8080"))

client.connect();
