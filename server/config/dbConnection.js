import mongoose from "mongoose";

const dbConnection = () => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default dbConnection;
