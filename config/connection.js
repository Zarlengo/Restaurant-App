const { Client } = require('pg');
console.log(process.env.NODE_ENV);

const connectionObject = require('./config.json')[process.env.NODE_ENV || "development"];

console.log(connectionObject);
const client = new Client(connectionObject);
module.exports = client;