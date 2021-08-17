// connect database to Client //
const {Client} = require('pg')

const connectionString = 'postgres://fqcivrxxzzwger:e15ac28b8f6808ee3e59c85089baaab82cefc7debe229f0b5f03e64bd0a1d133@ec2-54-196-65-186.compute-1.amazonaws.com:5432/d5fi8do1se5qll';
const client = new Client({
    connectionString: connectionString,
    ssl: {
      rejectUnauthorized: false
    }
});

module.exports = {client: client}
