const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hi Adnan Here, you have hit the default route",
    status: "success",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
