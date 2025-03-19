import mongoose from "mongoose";
import { configDotenv } from "dotenv";

// export const connectDB = async()=>{
//     await mongoose.connect('mongodb+srv://vishalpathak842:Vishalpathak842@cluster0.e7a0c.mongodb.net/FoodAppTomato').then(()=>console.log('DB CONNECTED'));
// }
// export const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {});
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

//export default connectDB

 //this is working and understand this what is happening in this

 
//  export const connectDB = () => 
//     {
//     mongoose.connect(process.env.MONGODB_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     })
//     .then(()=>{
//         console.log(`Database connected Successfully`);
//     })
//     .catch((error)=>{
//         console.log(`Unable to connect to database due to ${error.message}`);
//     })
// }
