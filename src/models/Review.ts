import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  name: string;
  rating: number;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ReviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IReview>("Review", ReviewSchema);
