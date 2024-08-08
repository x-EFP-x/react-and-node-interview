const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const userRouter = require('../routes/users');
const articlesRouter = require('../routes/articles');
const chatBotRouter = require('../routes/chatBot');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swaggerCongif');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(express.json());
app.use(logger('dev'));
app.use('/users', userRouter);
app.use('/articles', articlesRouter);
app.use('/chat-bot', chatBotRouter);

module.exports = app;
