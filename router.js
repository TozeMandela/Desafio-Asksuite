const express = require('express');
const router = express.Router();
const Home = require('./src/Controllers/homeController');

router.get('/', Home.Home);

module.exports = router;
