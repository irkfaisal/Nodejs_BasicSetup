const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

const login = new Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
});
module.exports = mongoose.model("login", login);