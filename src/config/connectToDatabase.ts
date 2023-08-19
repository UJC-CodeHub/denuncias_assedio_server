const mongoose = require("mongoose");
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.mongodbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (e: any) {
    console.log(e?.message);
  }
};
