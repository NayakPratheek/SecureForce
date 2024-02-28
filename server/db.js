const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbproject',
    password: '4cb21cs072',
    port: 5432
});

module.exports = pool;