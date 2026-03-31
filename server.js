const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/items", (req, res) => {
  res.json([
    { id: 1, name: "Assessment Report" },
    { id: 2, name: "Vendor Task" }
  ]);
});

app.post("/api/items", (req, res) => {
  const newItem = req.body;
  res.status(201).json({
    message: "Item created successfully",
    item: newItem
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
