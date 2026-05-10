import exp from 'express';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import { employeeApp } from './APIs/EmployeeApp.js';
import cors from 'cors';

config();
const app = exp();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(exp.json());

// Mounting the API - This is why your URLs must start with /employee-api
app.use('/employee-api', employeeApp);

// Root route to test if server is alive
app.get('/', (req, res) => res.send("Server is running!"));

// DB Connection
const connectDB = async () => {
  try {
    // It's better to use process.env.DB_URL from your .env file
    const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/employeeDB";
    await connect(dbUrl);
    console.log(" db connected");
    
    app.listen(PORT, () => console.log(` server listening on ${PORT}`));
  } catch (err) {
    console.log(" Error in DB connect:", err.message);
  }
};

connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});