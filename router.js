const express = require('express');
const router = express.Router();
const Home = require('./src/Controllers/homeController');

router.get('/', Home.Home);
router.get('/add',Home.add)

module.exports = router;
