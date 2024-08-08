const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true 
  },
  urlToImage: {
    type: String,
    required: true
  },
  publishedAt: {
    type: Date,
    required: true
  }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
