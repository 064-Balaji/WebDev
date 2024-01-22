const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const { connectDB } = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/course", require("./routes/course"));

app.use(errorHandler);

app.listen(port, () => console.log(`server connected on port ${port}`));
