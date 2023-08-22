const PORT = process.env.PORT ?? 8000;
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello fuckers");
});

app.listen(PORT, () => console.log(`server is runnig at ${PORT}`));
