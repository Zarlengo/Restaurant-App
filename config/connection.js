const { Client } = require('pg');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.json")[env];


// Checks if in production 
if (config.use_env_variable) {
    module.exports = new Client(process.env[config.use_env_variable]);
} else {
    module.exports = new Client(config);
}
