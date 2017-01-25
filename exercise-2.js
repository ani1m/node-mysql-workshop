var mysql = require('promise-mysql');

var colors = require('colors');

var connectionParameters = {
    host: 'localhost',
    user: 'ani1m',
    password: '',
    database: 'addressbook',
}

var connection = mysql.createConnection(connectionParameters)

connection.then(function(rows) {
        return rows.query('SELECT * FROM Account LIMIT 5;');
    })
    .then(function(rows) {
        rows.forEach(function(row) {
            console.log('#'.black.bold + row.id.toString().blue.bold + ':'.black.bold + ' ' + row.email);
        });

    })




