const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;
const path = require("path");
const connectDB = require("./config/connectDB");
connectDB(process.env.MONGO_URI);

const resetMongos_id = require("./config/resetMongos_id");
resetMongos_id();

const logger = require("./middleware/logger");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("storage"));
app.use(express.static("static"));

app.use(logger);

app.use("/api/admins", require("./routes/adminRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/magazines", require("./routes/magazineRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/workers", require("./routes/workerRoute"));
app.use("/api/contact", require("./routes/contactUsRouter"));

const { errorHandler } = require("./middleware/errorMiddleware");

app.use(errorHandler);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});
app.listen(port, () => console.log(`listening on port ${port}`));
