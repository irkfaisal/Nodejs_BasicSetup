var express = require('express');
var router = express.Router();

// controller require
const registerController = require("../Controller/registerController");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// API for getting all users data
router.get('/get-all-user', async function (req, res, next) {
  const alluser = await candidate.findOne({});
  console.log("alluser", alluser);
  res.status(200).json({ data: alluser });
});

//# User Registration API
router.post('/adminRegistration', registerController.register);

// #endregion
module.exports = router;
