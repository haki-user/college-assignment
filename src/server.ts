import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import setupSwagger from "./utils/swagger.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

// Swagger setup
setupSwagger(app);

app.listen(PORT, async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI not found");
  await connectDB(process.env.MONGO_URI);
  console.log(`Server running on http://localhost:${PORT}`);
});
