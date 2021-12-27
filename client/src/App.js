import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Compendium from "./pages/Compendium";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/compendium" element={<Compendium></Compendium>}></Route>
    </Routes>
  );
}

export default App;
