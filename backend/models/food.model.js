import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type: Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }

  },
  { timestamps: true }
);

const foodModel = mongoose.model.food || mongoose.model("food",foodSchema)

export default foodModel;
