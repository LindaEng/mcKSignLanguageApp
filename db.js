const {Pool} = require('pg');

const pool = new Pool({
    user:"postgres",
    password:"cre8tingData",
    database: "alphabet",
    host: "localhost",
    port: 5432
});

module.exports = pool;