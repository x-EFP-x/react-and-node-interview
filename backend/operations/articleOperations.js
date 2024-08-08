const Article = require('../models/articleModel')
const {connectToDatabase, closeConnection } = require('../config/dbConfig');

const articleOperations = {};

articleOperations.get = async () => {
    try {
        let articles;

        await connectToDatabase();

        articles = await Article.find({});

        await closeConnection();

        return (articles);
    } catch (error) {
        console.error('Error finding articles:', err);
        res.status(500).json({ error: 'Internal server error' });
    }

} 

module.exports = articleOperations;