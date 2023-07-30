import app from "./app";
import mongoose from "mongoose";

const PORT = 3000; 
const DB_NAME = "website"; 

mongoose.connect("mongodb://localhost:27017/website", {})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
