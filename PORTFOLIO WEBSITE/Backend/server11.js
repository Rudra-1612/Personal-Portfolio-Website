const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// Error middleware (must be last)
app.use(errorMiddleware);

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
