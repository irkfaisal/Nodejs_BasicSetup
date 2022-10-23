const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const registerCandidate = new Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
});
module.exports = mongoose.model("registerCandidate", registerCandidate);