const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use("/api", routes);

module.exports = app; // Export app for server.js
