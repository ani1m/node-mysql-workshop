
var mysql = require('promise-mysql')

var connectionParameters = {
    host: 'localhost',
    user: 'ani1m',
    password: '',
    database: 'addressbook',
}

var connection = mysql.createConnection(connectionParameters)

connection.then(function(result){
    
    return result.query(`SELECT Account.id, 
                                Account.email, 
                                AddressBook.name 
                        FROM Account 
                        JOIN AddressBook 
                        ON Account.id = AddressBook.accountId;`)
    
})

 .then(function(result) {
     
    //  console.log(result)
    result.forEach(function(cur, index, arr) {
        if (index===0 || cur.email != arr[index-1].email ) {
            console.log('#' + cur.id + ': ' + cur.email)
        }
        console.log(cur.name);
    })
});





/*
[ 
    {
        id: 1,
        email: 'john@smith.com',
        name: 'business contacts'
    },
     {
        id: 2,
        email: 'jane@smith.com',
        name: 'business contacts'
    },
     {
        id: 2,
        email: 'jane@smith.com',
        name: 'personal friends'
    },
     {
        id: 2,
        email: 'jane@smith.com',
        name: 'people i dont like'
    },
     {
        id: 3,
        email: 'tarzan@jungle.com',
        name: 'business contacts'
    },
     {
        id: 3,
        email: 'tarzan@jungle.com',
        name: 'personal friends'
    },
     {
        id: 4,
        email: 'meow@kitty.com',
        name: 'business contacts'
    },
     {
        id: 4,
        email: 'meow@kitty.com',
        name: 'people i dont like'
    },
     {
        id: 6,
        email: 'red@green.blue',
        name: 'business contacts'
    },
     {
        id: 6,
        email: 'red@green.blue',
        name: 'people i dont like'
    }
]
*/

