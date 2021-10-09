// * imports
require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

// * db
const connectDB = require('./db');

// ! Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// * routes

const start = async () => {
  try {
    await connectDB(process.env.DB);
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
