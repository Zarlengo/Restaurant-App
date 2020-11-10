const { Client } = require('pg');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "./config/config.json")[env];


// Checks if in production 
if (config.use_env_variable) {
    const connectionObject = process.env[config.use_env_variable];
} else {
    const connectionObject = config;
}
module.exports = new Client(connectionObject);
