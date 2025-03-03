import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/food.routes.js"; // ✅ Added missing import
import userRouter from "./routes/user.routes.js";
import cartRouter from "./routes/cart.routes.js";
import "dotenv/config";
import orderRouter from "./routes/order.routes.js";

// ✅ Establish database connection first
connectDB();

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Group all routes together
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/food", foodRouter); // ✅ Moved above database connection
app.use("/api/order",orderRouter)

// Serve static images
app.use("/images", express.static("uploads"));

// API test endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
