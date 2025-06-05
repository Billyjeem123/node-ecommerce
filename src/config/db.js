const mongoose = require('mongoose');
const getEnvironmentVariables  = require('./enviroments/env');

const connectDB = async () => {
  try {
    const env = getEnvironmentVariables();
    const conn = await mongoose.connect(env.db_uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDB;
