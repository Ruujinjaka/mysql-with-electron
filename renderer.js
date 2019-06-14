// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


document.getElementById('btn').addEventListener('click', () => {
    // require the mysql module
    const mysql = require('mysql');

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "sheed721",
        database: "EmployeeDb"
    });

    connection.connect((err) => {
        if(err){
            return console.log(err.message);
        }
        console.log("Connection successfully established");
    })

    
    // TODO: Queries will be executed
    $sql = `
    SELECT *
    FROM employee
    `

    connection.query($sql, (err, rows, fields) => {
        if(err){
            return console.log("An error occured with the query: ", err.message);
        }

        console.log(rows);
    })


    // ending the connection
    connection.end(() => {
        console.log("Connection successfully closed")
    });
})