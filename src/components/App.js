import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  // Fetch initial plant data
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant from form
  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  // Toggle stock status
  function handleToggleStock(id) {
    setPlants((prev) =>
      prev.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        onAddPlant={handleAddPlant}
        onToggleStock={handleToggleStock}
      />
    </div>
  );
}

export default App;
