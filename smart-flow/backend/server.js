import dotenv from "dotenv"; // Load environment variables
import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Import CORS
import { connectDB } from "./config/db.js"; // Import your database connection function
import Product from "./models/product.model.js"; // Import the Product model
import userRoutes from "./routes/user.route.js"; // Import user routes
import path from "path";

// Load environment variables from .env file
dotenv.config();

// Log the MongoDB URI for debugging
console.log("MongoDB URI:", process.env.MONGO_URI);

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000; // Use the PORT from environment variables or default to 5000
const DirName = path.resolve(); // Get the directory name

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Allows us to accept JSON data in the req.body

// Connect to MongoDB
connectDB();

// User routes
app.use('/api/users', userRoutes);

// Product routes
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.post("/api/products", async (req, res) => {
    const product = req.body; // User will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid product id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        res.status(404).json({ success: false, message: "Product Not found" });
    }
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(DirName, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(DirName, "frontend", "dist", "index.html"));
    });
}

// Start the server
app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
});