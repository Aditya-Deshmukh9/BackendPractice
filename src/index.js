import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MONGO db connection failed !!! ', err);
  });