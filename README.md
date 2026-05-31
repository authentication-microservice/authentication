# authentication
Used for login and signup

Used for:
POST /signup creating an account
To test signup route with a request
run node app.js in one terminal then in a second terminal input these commands
curl -X POST http://localhost:8080/signup \
-H "Content-Type: application/json" \
-d '{"firstname":"Bee","email":"bee@email.com","password":"test123"}'

Then check your node terminal and it should show the json

Run another node terminal
const db = require('./database');
Then sql
db.all(
     'SELECT * FROM users',
     [],
     (err, rows) => {
         console.log(rows);
     }
 );

to see the entire saved users in the current database

POST /login logging in
curl -X POST http://localhost:8080/login \
-H "Content-Type: application/json" \
-d '{"firstname":"Bee","email":"bee@email.com","password":"test123"}'

POST /verify-token verify logging in user

What to say:
Runs on port 8080

Endpoints:
POST /signup
POST /login
POST /verify-token

Main program runs on 3080

Main program > http request > authentication service > json response (userID: #) > main program rememebers current user userId has words and phrases then
SELECT *
FROM vocabulary
WHERE user_id = 5
or
SELECT *
FROM phrases
WHERE user_id = 5