var mysql = require('mysql');

var conn = function() {
    console.log('MYSQL : Conexão estabelecida');
    return mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE
    });
}

module.exports = function () {
    console.log('MYSQL : Carregado');
    return conn;
}