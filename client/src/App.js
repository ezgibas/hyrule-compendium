import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Compendium from "./pages/Compendium";
import HomePage from "./pages/HomePage";
import Creatures from "./pages/Creatures";
import IndividualCreature from "./pages/Creatures/indivCreature";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/compendium" element={<Compendium/>}/>
      <Route exact path="/creatures" element={<Creatures/>}/>
      <Route path="/creatures/:creatureName" element={<IndividualCreature/>}/>
      <Route exact path="/" element={<HomePage></HomePage>}/>
      <Route element={<h1>not found</h1>}/>
    </Routes>
    </div>
  );
}

export default App;
