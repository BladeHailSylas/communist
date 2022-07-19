const mariadb = require('mariadb');
const val = require('./conductor.js');
const pool = mariadb.createPool({
    host: val.Host, 
    user: val.User, 
    password: val.Pass,
    port: val.Port,
    connectionLimit: val.connectionLimit
});

async function insertValue(value) {
    let conn;
    try {
        conn = await pool.getConnection();
        conn.query('USE docs');
        conn.query('INSERT INTO documents(title, body, password, date) VALUES (?)', [value]);
        console.log('Connected and inserted values into your documents!');
    }
    catch(err){
        throw err;
    }
    finally{
        if(conn) conn.end()
    }
}

module.exports = {
    insertValue: insertValue
}