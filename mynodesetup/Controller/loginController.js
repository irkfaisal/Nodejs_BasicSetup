const mongoose = require("mongoose");
const login = require("../Model/login");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = '1234';

// API call for login with JWT authentition
exports.login = async (req, res, next) => {

    const { email, password } = req.body;
    console.log("data ", email);
    const isExist = await login.findOne({ email: email });

    if (isExist) {
        // Load hash from your password DB.
        bcrypt.compare(password, isExist.password, function (err, result) {
            // result == true
            if (result) {
                const token = jwt.sign({
                    data: isExist._id
                }, secret, { expiresIn: 60 * 60 });
                console.log("token-->", token);
                res.send({ success: 'Login Successfully', token: token })
            } else {
                res.send({ error: 'Password not match' });
            }
        });

    } else {
        res.send({ error: 'user not found' });
    }

}