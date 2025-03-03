import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js";
import foodRouter from "./routes/food.routes.js";
import userRouter from "./routes/user.routes.js";
import 'dotenv/config'
import cartRouter from "./routes/cart.routes.js";

//app config

const app = express();

const port = 4000

// middleware

app.use(express.json());
app.use(cors());
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

// db connection
connectDB();

//API endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})