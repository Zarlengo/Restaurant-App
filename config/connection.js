const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.json")[env];


// Checks if in production 
if (config.use_env_variable) {
    connectionObject = process.env[config.use_env_variable];
} else {
    connectionObject = config;
}

const schema = fs.readFileSync(path.resolve(__dirname + '/../db/schema.sql'), 'utf8');
const seed = fs.readFileSync(path.resolve(__dirname + '/../db/seeds.sql'), 'utf8');

const client = new Client(connectionObject);

client.query(schema, (error, response) => {
    if (error) console.log(error);
    client.query(seed, (error, response) => {
        if (error) console.log(error);
        console.log("Seed complete");
    });
});


module.exports = client;