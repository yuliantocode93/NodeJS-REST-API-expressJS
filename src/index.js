require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const userRoutes = require("./routes/users");

const middlewareLogRquest = require("./middleware/logs");
const upload = require("./middleware/multer");

const app = express();

app.use(middlewareLogRquest);
app.use(express.json());
app.use("/assets", express.static("public/images"));

app.use("/users", userRoutes);
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "upload success",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
