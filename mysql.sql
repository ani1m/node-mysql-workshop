
 
 
 SELECT Account.id, 
        Account.email, 
        Account.name 
 FROM Account  
 JOIN AddressBook 
 ON Account.id = accountId;