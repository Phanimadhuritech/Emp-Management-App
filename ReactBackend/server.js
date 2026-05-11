import exp from 'express';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import { employeeApp } from './APIs/EmployeeApp.js';
import cors from 'cors';

config();

const app = exp();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
  // origin: [
  //   "https://emp-management-app-chi.vercel.app",
  //   "https://emp-management-6dw0jzhrw-phani-madhuri-vadlamani-s-projects.vercel.app"
  // ],
  // methods: ["GET", "POST", "PUT", "DELETE"],
  // credentials: true
));

app.use(exp.json());

// Routes
app.use('/employee-api', employeeApp);

app.get('/', (req, res) => res.send("Server is running!"));

// DB Connection
const connectDB = async () => {
  try {
    const dbUrl = process.env.DB_URL;

    if (!dbUrl) {
      throw new Error("DB_URL is not defined in environment variables");
    }

    await connect(dbUrl);
    console.log("db connected");

    app.listen(PORT, () =>
      console.log(`server listening on ${PORT}`)
    );
  } catch (err) {
    console.log("Error in DB connect:", err.message);
  }
};

connectDB();

// Error handler
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
