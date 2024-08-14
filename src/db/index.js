import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URL
    );
    console.log("CORS_ORIGIN:", process.env.CORS_ORIGIN);

    console.log(
      `MongoDB Conneced !! DB HOST:  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONOGDB connection error: " + error);
    process.exit(1);
  }
};

export default connectDB;
