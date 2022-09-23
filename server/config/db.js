const mongoose = require("mongoose");

const connectDb = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL);
  console.log(`Mongo connected ${connect.connection.host}`.cyan.underline.bold);
};

module.exports = connectDb;
