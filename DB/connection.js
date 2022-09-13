const mysql2 = require('mysql2');

const sql = mysql2.createConnection({
    host: '127.0.0.1',
    port:'3306',
    user: 'root',
    password: '',
    database: 'newdb'
})

module.exports = {sql};