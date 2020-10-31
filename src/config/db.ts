import mongoose, { Connection, ConnectionOptions } from "mongoose";

let database: Connection;

export const connectDB = async () => {
  if (database) return;

  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "", options);
    database = mongoose.connection;
    console.log(`[database]: Connected to ${database.host}:${database.port}`);
  } catch (error) {
    console.error(`[database]: ${error.message}`);
    process.exit(1);
  }

  database.on("disconnected", connectDB);
};

export const disconnectDB = () => {
  if (!database) return;
  mongoose.disconnect();
  console.log("[database]: Disconnected. ");
};
