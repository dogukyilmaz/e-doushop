import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isAdmin: boolean;
  isSeller: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isSeller: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", UserSchema);
