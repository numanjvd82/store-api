const mongoose = require('mongoose');

//  * connecting the db using mongoose.connect which takes two param @uriString and @options
const connectDB = (url) => mongoose.connect(url).then(() => console.log('Connected to DB')).catch((err) => console.error(err));
module.exports = connectDB;
