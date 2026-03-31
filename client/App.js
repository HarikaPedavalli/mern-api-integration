function App() {
  const items = [
    { id: 1, name: "Assessment Report" },
    { id: 2, name: "Vendor Task" }
  ];

  return (
    <div>
      <h1>MERN API Integration</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
