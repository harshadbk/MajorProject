require("dotenv").config(); // Correct loading of environment variables

const express = require("express"); // Correct import of Express.js
const app = express();

const cors = require("cors"); // Correct import of CORS

const connection = require("./db"); // Fix the incorrect spacing and path
const UserRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// Establish the database connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/users", UserRoutes);
app.use("/api/auth", authRoutes);

// Define the port using environment variables or fallback to 5000
const port = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Backend Server Connected Successfully on port ${port}`);
});
