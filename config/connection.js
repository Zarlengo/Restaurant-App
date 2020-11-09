const { Client } = require('pg');
const connectionObject = require('./config.json')[process.env.NODE_ENV || "development"];

console.log(connectionObject);
const client = new Client(connectionObject);
module.exports = client;