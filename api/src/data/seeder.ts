import mongoose from "mongoose";
import dotenv from "dotenv";

import { users } from "./users";
import { products } from "./products";

import User, { IUser } from "models/User";
import Product, { IProduct } from "models/Product";
import Order, { IOrder } from "models/Order";

import { connectDB, disconnectDB } from "config/db";
import { Product as IProd } from "types";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await clearDatabase();
    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((product: IProd) => {
      return { ...product, user: admin };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported!");
  } catch (error) {
    console.log(error.message);
  } finally {
    disconnectDB();
  }
};

const destroyData = async () => {
  try {
    await clearDatabase();
    console.log("Data destroyed!");
  } catch (error) {
    console.log(error.message);
  } finally {
    disconnectDB();
  }
};

const clearDatabase = async () => {
  await Order.deleteMany({});
  await Product.deleteMany({});
  await User.deleteMany({});
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
