const mongoose = require("mongoose")
const connectDB = async () => {
  try {
    const MONGO_URI = "mongodb+srv://ashok:ashok123@mern-stack-tw5cv.mongodb.net/expensetracker?retryWrites=true&w=majority";
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connection: ${conn.connection.host}`);

  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1)
  }
}

module.exports = connectDB
