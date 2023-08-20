const mongoose = require('mongoose');

const logger = require('../utils/logger')

const DB='mongodb://127.0.0.1:27017/review_rating'
mongoose.connect(DB , {useNewUrlParser : "true"});
mongoose.connection.on('error' , (err) => {
  console.log('error' , err),
  logger.log('error', "mongoose connection error")
});
mongoose.connection.on('connected' , (err , res) => {
  console.log('MongoDB is Connected'),
  logger.log('info', "MongoDB is connected")





















  
});

