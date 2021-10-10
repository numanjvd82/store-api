// * imports
require('dotenv').config();
require('express-async-errors');
const express = require('express');

const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
const productsRouter = require('./routes/products');

// middlewares
const errorHandleMiddleware = require('./middlewares/error-handler');
const notFound = require('./middlewares/not-found');

// * db
const connectDB = require('./db');

// ! Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// * routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// * store routes
app.use('/api/v1/products', productsRouter);

app.use(notFound);
app.use(errorHandleMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.DB);
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
