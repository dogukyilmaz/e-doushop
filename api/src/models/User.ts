import mongoose, { Schema, Document, HookNextFunction } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isAdmin: boolean;
  isSeller: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  matchPassword: (password: string) => Promise<boolean>;
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

UserSchema.methods.matchPassword = async function (inputPassword: string) {
  return await bcrypt.compare(inputPassword, this.password);
};

UserSchema.pre("save", async function (this: IUser, next: HookNextFunction) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model<IUser>("User", UserSchema);
