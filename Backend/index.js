// // index.js
// const dotenv = require("dotenv");
// dotenv.config();

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const cookieParser = require("cookie-parser");
// const path = require("path");
// const mongoose = require("mongoose");

// // ROUTES
// const userRoutes = require("./routes/userRoutes");
// const forgotUserRoutes = require("./routes/forgotUserRoutes");
// const clientRoutes = require("./routes/clientRoute");
// const forgotClientRoutes = require("./routes/forgotClientRoutes");
// const partnershipRoutes = require("./routes/partnershipRoutes");
// const callbackRoutes = require("./routes/callbackRoutes");
// const businessPartnershipRoutes = require("./routes/businessPartnershipRoutes");
// const cvSubmissionRoutes = require("./routes/cvSubmissionRoutes");

// // CORS Configuration
// const corsOptions = {
//   origin: ["http://localhost:5173"], // Update this to your frontend URL in production
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// };

// // MIDDLEWARES
// app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // DATABASE CONNECTION
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // BASIC ROUTES
// // app.get("/", (req, res) => res.send("Hello world!"));
// // app.get("/health", (req, res) => res.status(200).json({ message: "Server is running" }));

// // API ROUTES
// app.use("/users", userRoutes);
// app.use("/users/forgot", forgotUserRoutes);

// app.use("/business", clientRoutes);
// app.use("/business/forgot", forgotClientRoutes);

// app.use("/partnership", partnershipRoutes);
// app.use("/callback", callbackRoutes);
// app.use("/business-partnership", businessPartnershipRoutes);
// app.use("/cv-submission", cvSubmissionRoutes);

// // SERVE FRONTEND (assuming Vite or React build in /frontend/dist)
// const _dirname = path.resolve();
// app.use(express.static(path.join(_dirname, "/frontend/dist")));

// app.get("*", (_, res) => {
//   res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
// });

// // ERROR HANDLERS
// process.on("uncaughtException", (err) => {
//   console.error("Uncaught Exception:", err.message, err.stack);
// });
// process.on("unhandledRejection", (err) => {
//   console.error("Unhandled Rejection:", err.message, err.stack);
// });

// // START SERVER
// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server is running on port ${process.env.PORT || 5000}`);
// });

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
// const connectToDb = require("./DataBase/Db");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const clintRoutes = require("./routes/clientRoute");
const partnershipRoutes = require("./routes/partnershipRoutes");
const callbackRoutes = require("./routes/callbackRoutes");
const businessPartnershipRoutes = require("./routes/businessPartnershipRoutes");
const cvSubmissionRoutes = require("./routes/cvSubmissionRoutes");
const forgotUserRoutes = require("./routes/forgotUserRoutes"); // [forgot]
const forgotClientRoutes = require("./routes/forgotClientRoutes"); // [forgot]
// const passport = require("./passport-config");
// const googleUserRoutes = require("./routes/googleUserRoutes");
// const googleClientRoutes = require("./routes/googleClientRoutes");

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://www.skillroom.co.in",
    "https://skillroom.co.in",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// ... existing code ...

// Add this before app.use routes
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// ... existing app.use routes ...
app.use(cors(corsOptions));
app.use(cookieParser());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
// connectToDb();

app.get("/favicon.ico", (req, res) => res.status(204).end()); // Ignore favicon

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

// app.get("/health", (req, res) => {
//   res.status(200).json({ message: "Server is running" });
// });

app.use("/users", userRoutes);
app.use("/business", clintRoutes);
app.use("/partnership", partnershipRoutes);
app.use("/callback", callbackRoutes);
app.use("/businessPartnership", businessPartnershipRoutes);
app.use("/cvSubmission", cvSubmissionRoutes);
app.use("/users", forgotUserRoutes); // [forgot]
app.use("/business", forgotClientRoutes); // [forgot]
// app.use("/users", googleUserRoutes);
// app.use("/business", googleClientRoutes);

// Global error handler
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message, err.stack);
});
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message, err.stack);
});

// START SERVER
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
// module.exports = app;

// "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend",
