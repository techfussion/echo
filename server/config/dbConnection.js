import mongoose from "mongoose";

const dbConnection = (PORT) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection established. Starting server...");
      app.listen(PORT, () => console.log(`Sever port: ${PORT}`));

      /* POPULATE DB WITH DUMMY USERS ONCE FOR TESTING */
      // User.insertMany(users);
      // Post.insertMany(posts);
    })
    .catch((err) =>
      console.log(`${err} could not establish connect with the database`)
    );
};

export default dbConnection;
