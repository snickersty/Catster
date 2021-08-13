
const express = require('express');
const morgan = require('morgan');
const {prohairesis} = require('prohairesis');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app
  .use(morgan('dev'))
  .use(express.static('../Caster/index.html'))
// parse application/x-www-form-urlencoded
  .use(bodyParser.urlencoded({ extended: false }))
// parse application/json
  .use(bodyParser.json())


const {client} = require('./db');
//
// get all the meowsages from the database
app.get('/meows', async (req, res) => {

  const results =  await client.query('SELECT * from meows')

  if (results.rows) {
    res.status(200).json(results.rows)
  } else {
    res.status(400).json('An error has occured')
  }
})

// store the meowsages to the database
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
