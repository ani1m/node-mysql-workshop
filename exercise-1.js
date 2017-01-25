var mysql = require('promise-mysql');
var Table = require('cli-table');


var connectParams = {
    host: 'localhost',
    user: 'ani1m',
    password: '',
    database: 'addressbook',
}

var connection = mysql.createConnection(connectParams)

connection.then(function(conn) {
        return conn.query('SHOW DATABASES;');
    })
    .then(function(databases) {
       
        // instantiate 
        var table = new Table({
            head: ['DATABASES'],
            colWidths: [ 100]
        });
        databases.forEach((el) => {
         
            table.push([el.Database])
        })
        // table is an Array, so you can `push`, `unshift`, `splice` and friends 
        console.log(table.toString());

    });
    
