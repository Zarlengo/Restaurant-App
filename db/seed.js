const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');


const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

if (config.use_env_variable) {
    connectionObject = process.env[config.use_env_variable];
} else {
    connectionObject = config;
}

const schema = fs.readFileSync(path.resolve(__dirname + '/schema.sql'), 'utf8');
const seed = fs.readFileSync(path.resolve(__dirname + '/seeds.sql'), 'utf8');

const pool = new Pool(connectionObject);


pool.query(schema, (error, response) => {
    if (error) console.log(error);
    pool.query(seed, (error, response) => {
        if (error) console.log(error);
        console.log("Seed complete");
        pool.end();
    });
});
