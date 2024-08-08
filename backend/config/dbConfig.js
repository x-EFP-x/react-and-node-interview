const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Article = require('../models/articleModel');
require('dotenv').config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log('Database connection successful');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

async function importData() {
    try {
        if (mongoose.connection.readyState !== 1) {
            await connectToDatabase();
        }

        const dataFilePath = path.join(__dirname, '..', 'data.json');
        const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

        const bulkOps = data.map(article => ({
            updateOne: {
                filter: { url: article.url },
                update: article,
                upsert: true
            }
        }));

        await Article.bulkWrite(bulkOps);
        console.log('Data import process completed');
    } catch (err) {
        console.error('Error importing data:', err);
    }
}

async function closeConnection() {
    await mongoose.connection.close();
    console.log('Database connection closed');
}

module.exports = { importData, connectToDatabase, closeConnection };
