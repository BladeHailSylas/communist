var mysql = require('mysql');
var link = mysql.createConnection({
    host: '127.0.0.1',
    user: 'administ',
    password: 'jeong2958',
    database: 'docs'
});
module.exports = mysql, link;