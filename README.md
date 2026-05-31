# authentication

## Sign Up and Login Users

Runs on port 8080

Make sure to npm install express sqlite3 bycrypt

Express to handle POST requests

SQLite3 to store users id, firstname, email, and password

bycrypt helps to secure passwords created by the user so in the database we do not see a user's actual password

### Routes:
Endpoints:
POST /signup
POST /login
POST /verify-token

### How do you use:

#### POST /signup Creating a user account
To create a user run node app.js in one terminal then in a second terminal input these commands

curl -X POST http://localhost:8080/signup \
-H "Content-Type: application/json" \
-d '{"firstname":"Bee","email":"bee@email.com","password":"test123"}'

Then check your node terminal and it should show the json

Run another node terminal with these lines of code below:
node

const db = require('./database');

Then sql
db.all(
     'SELECT * FROM users',
     [],
     (err, rows) => {
         console.log(rows);
     }
 );

TO see the entire saved users in the current database

#### POST /login

User login and to verify the email is in the database

In another terminal run:
curl -X POST http://localhost:8080/login \
-H "Content-Type: application/json" \
-d '{"firstname":"Bee","email":"bee@email.com","password":"test123"}'

#### POST /verify-token Verify Logged in User
Checks password in bycrypt (secure format) without needing to show the actual password in the database
