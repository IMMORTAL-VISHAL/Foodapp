import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    cartData:{
        type:Object,
        default:{},
    }
  },
  { timestamps: true },{minimize:false}
);

const userModel = mongoose.model.user || mongoose.model("user",userSchema);

export default userModel;
