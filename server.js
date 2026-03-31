const express = require("express");
const app = express();

app.use(express.json());

let items = [
  { id: 1, name: "Assessment Report" },
  { id: 2, name: "Vendor Task" }
];

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Valid item name is required" });
  }

  const newItem = {
    id: items.length + 1,
    name: name.trim()
  };

  items.push(newItem);

  res.status(201).json({
    message: "Item created successfully",
    item: newItem
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
