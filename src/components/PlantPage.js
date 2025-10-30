import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onToggleStock }) {
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} onToggleStock={onToggleStock} />
    </main>
  );
}

export default PlantPage;
