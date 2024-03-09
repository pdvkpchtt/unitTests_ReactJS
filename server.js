const express = require("express");
const cors = require("cors");
const form = require("./src/controllers/form");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.post("/handle/", form);

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
