const express = require('express');
const chatbotController = require('../controllers/chatbotController');

const router = express.Router();

router.post('/', chatbotController.GPTdemo);

module.exports = router;
