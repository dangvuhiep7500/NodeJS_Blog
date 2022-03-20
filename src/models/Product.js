const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type:String, maxLength: 255 },
  price: { type:Number, maxLength: 255 },
  image: { type:String },
  createdAT:  { type:Date, default: Date.now },
  updatedAT:  { type:Date, default: Date.now }
});

module.exports = mongoose.model('Product', Product);