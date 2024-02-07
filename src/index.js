const express = require("express");

const userRoutes = require("./routes/users");

const middlewareLogRquest = require("./middleware/logs");

const app = express();

//* app.method(path, handler);

// app.use("/", (req, res, next) => {
//   res.send("Hello World");
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

app.use(middlewareLogRquest);

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    name: "yulianto",
    age: 20,
  });
});

app.post("/", (req, res) => {
  res.send("hello post method");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
