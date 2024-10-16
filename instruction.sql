GET            FETCH                  READ

POST            SEND                CREATE

PUT              UPDATE              UPDATE
        
DELETE          DELETE               DELETE
-------------------------------------------------------------------------
1 CREATE A SERVER , TEST
 2 CREATE A CUSTOM API WITH AJAX 
 3 BUILD AN APPLICATION CREATES A UI, USING AJAX API TO CONNECT.

4  CREATE EMPLOYEE PORTAL APPLICATION, create a server for the api that will interact with employee portal
----------------------------------------

REST API WE CAN CALL DATA FROM THE SERVER

REST API = A SET OF URLS , HOW TO CREATE THE SET OF URLS IS THE METHOD CALLED API

GET-> /api/emplyees/

POST-> /api/employees/

PUT-> /api/employees/:id

DELETE-> /api/employees/:id

to begin, create a new folder for our server npm init in the server folder
--------------------------------------------------------------
1 npm init
2 express module to creat a server
3 body-parser to perform..
4 cors to perform cross browser activities
all = npm install express body-parser cors --save  



HERE WE CREATE OUR SERVER FOR OUR PERSONAL USE, INSTEAD OF USING ANOTHER PERSONS SERVER
ON OUR SERVER, WE CAN DELETE PUT CREATE POST GET

//  create a router

const express = require('express');
const router = express.Router();

module.exports = router;

// create server 
const express = require('express');// load express

const app = express(); // initialize express

const hostname = '127.0.0.1';

const port = 3000;

app.listen(port, hostname, ()=>{
    console.log(`Express is started at http://${ hostname }:${ port }`);
});

// here we will now use our server.

GET-> http://127.0.0.1:3000/api/emplyees/

POST-> http://127.0.0.1:3000/api/employees/

PUT-> http://127.0.0.1:3000/api/employees/:id

DELETE-> http://127.0.0.1:3000/api/employees/:id