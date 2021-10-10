const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    trim: true,
  },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 2 },
  createdAt: { type: Date, default: Date.now },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'marcos', 'caressa', 'liddy'],
      message: '{VALUE} is Invalid',
    },
  },
});

module.exports = mongoose.model('Product', ProductSchema);
