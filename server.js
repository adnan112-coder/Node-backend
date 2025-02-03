const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hi from the Desktop",
    status: "success",
  });
  console.log("Default route hit");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
