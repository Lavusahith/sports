var express = require('express');
var router = express.Router();
var ctrlothers = require('../controllers/others.js');

router.get('/AboutUs',ctrlothers.AboutUs);
router.get('/contact',ctrlothers.contact);
module.exports=router;
