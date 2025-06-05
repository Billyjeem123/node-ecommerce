const express = require('express');
const connectDB = require('./src/config/db');
const UserRoute = require('./src/routes/routes');
const bodyParser = require('body-parser');

class Server {
  constructor() {
    this.app = express();
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigs() {
    connectDB();
    this.configureBodyParser();
  }

  setRoutes() {
    this.app.use('/api/user', UserRoute);
  }

  configureBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({ message: 'Not found', status_code: 404 });
    });
  }

  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = error.status || 500;
      res.status(errorStatus).json({
        message: error.message || 'Something went wrong. Please try again!',
        status_code: errorStatus,
      });
    });
  }
}

module.exports = Server;
