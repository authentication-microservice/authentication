const express = require('express');

const app = express();

const db = require('./database');

app.use(express.json());

app.post('/signup', function(req, res) {
    //Testing signup route with a request
    // console.log(req.body);

    // res.json({
    //     message: 'Signup route reached'
    // });

    // ---- Start saving users created into a database ----
    const firstname = req.body.firstname;
    const email = req.body.email;

    // const password = req.body.password;   replacing it with bycrypt hash to store password securely in the database below
    const bcrypt = require('bcrypt');
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.run(
        `INSERT INTO users (firstname, email, password)
        VALUES (?, ?, ?)`,
        [firstname, email, hashedPassword],
        function(err) {
            if (err) {
                console.log(err.message);
                return res.status(500).json({
                    message: 'Signup failed'
                });
            }
            res.json({
                message: 'User created successfully',
                id: this.lastID
            });
        }
    );

});

app.post('/login', function(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    // console.log('Login attempt:');
    // console.log(email);

    // res.json({
    //     message: 'Login route reached'
    // });
    db.get(
        'SELECT * FROM users WHERE email = ?',
        [email],
        function(err, row) {
            if (err) {
                return res.status(500).json({
                    message: 'Database error'
                });
            }
            console.log(row);
            res.json({
                message: 'User lookup complete'
            });
        }
    );
});



app.listen(8080, () => {
    console.log('Authentication service running on port 8080');
});