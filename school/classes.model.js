import mongoose from "mongoose";

const classRoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    pinCode: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Classes = mongoose.model("Classes", classRoomSchema);
