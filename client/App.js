import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const handleAddItem = () => {
    if (!newItem.trim()) {
      alert("Please enter a valid item");
      return;
    }

    fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: newItem })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.item) {
          setItems([...items, data.item]);
          setNewItem("");
        }
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  return (
    <div>
      <h1>MERN API Integration</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
