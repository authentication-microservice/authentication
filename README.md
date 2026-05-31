# authentication
Used for login and signup

Used for:
POST /signup creating an account
run node app.js in one terminal then in a second terminal input these commands
curl -X POST http://localhost:8080/signup \
-H "Content-Type: application/json" \
-d '{"firstname":"Bee","email":"bee@email.com","password":"test123"}'

Then check your node terminal and it should show the json

POST /login logging in
POST /verify-token verify logging in user