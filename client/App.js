import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // GET items
  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // POST new item
  const handleAddItem = () => {
    fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: items.length + 1,
        name: newItem
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setItems([...items, data.item]); // update UI
        setNewItem(""); // clear input
      });
  };

  return (
    <div>
      <h1>MERN API Integration</h1>

      {/* Input box */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />

      {/* Button */}
      <button onClick={handleAddItem}>Add Item</button>

      {/* List */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
