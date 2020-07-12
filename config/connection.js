const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
        connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "neighborly",
    })
}

connection.connect((err) => {
    if(err){
        console.err("Error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
