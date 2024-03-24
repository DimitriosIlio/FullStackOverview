const express = require("express");
const db = require("./connection");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// handle the CRUD operation of Adding . deleting , updating and rendering all the tasks
app.use("/tasks", require("./Routers/taskRouter"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
