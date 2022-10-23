const mongoose = require("mongoose");
const register = require("../Model/register");

const bcrypt = require('bcrypt');
const saltRounds = 10;


// signup/register logic with password hash
exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log("registerDetails---->", req.body)
    const isExist = await register.findOne({ email: email });
    if (isExist) {
        console.log("isExist-->", isExist);
        res.send({ Error: "User already exist" })
    }
    else {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                // Store hash in your password DB.
                console.log(hash);
                const data = {
                    name: name,
                    email: email,
                    password: hash,
                }
                const createData = await register.create(data);
                if (createData) {
                    res.send({ success: 'Registration Successfully' })
                }
            });
        });
    }
};