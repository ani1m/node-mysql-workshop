var mysql = require('promise-mysql')

var connectionParameters = {
    host: 'localhost',
    user: 'ani1m',
    password: '',
    database: 'addressbook',
}

var connection = mysql.createConnection(connectionParameters)

connection.then(function(result) {

    return result.query(`SELECT Account.id, 
                                Account.email, 
                                AddressBook.name 
                        FROM Account 
                        LEFT JOIN AddressBook 
                        ON Account.id = AddressBook.accountId;`)

})

.then(function(result) {

    //  console.log(result)
    result.forEach(function(cur, index, arr) {
        if (index === 0 || cur.email != arr[index - 1].email) {
            console.log('#' + cur.id + ': ' + cur.email)
        }
        if (cur.name === null) {
            console.log('--no address books--')
        }
        else {
            console.log(cur.name);
        }
    })
});
