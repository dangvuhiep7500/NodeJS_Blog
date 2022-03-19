const mongoose = require("mongoose");
// const MongoClient = mongodb.MongoClient;
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/QLBanDoDienTu");
    
    console.log('connect succesfully!!!');
  } catch (error) {
    console.log('connect fail!!!');
  }
}
module.exports = { connect };

