
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const {client} = require('./db')

// client.connect()
// .then(() => console.log("connection successful"))
// .then(() => client.query("insert into meows values ($1, $2)", [2,'heeeelp']))
// .then(() => client.query("SELECT * from meows"))
// .then(results => console.table(results.rows))
// .catch(e => console.log("error", e))
// .finally(()=> client.end())

app.get("/meows", async (req, res) => {
  const results = await readmeows();
  res.setHeader("content-type", "application/json")
  res.send(JSON.stringify(results))
})


app.post("/meows", async (req, res) => {
  const reqJson = req.body;
  const results = await createMeows(reqJson.meow)
  console.log(req.body)
  // write req.body to the database

  res.send('meow saved')

})

app.listen(8080, () => console.log("server listening to 8080"))

client.connect();

// start()
//
// async function start(){
//   try{
//
//     await client.connect()
//     console.log("connection successful")
//
//     const {rows} = await client.query("select * from meows")
//     console.log(rows)
//   }
//
//   catch (ex){
//     console.log(`error happened ${ex}`)
//   }
//   finally {
//     await client.end()
//     console.log("client disconnected");
//   }
// }

async function readmeows() {
  try {
    const results = await client.query("select id, content from meows")
    return results.rows;
  }
  catch(err){
    console.log('err', err)
    return []
  }
}
