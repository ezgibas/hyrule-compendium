import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [eventData, setEventData] = useState()
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/entry/moblin")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setEventData(data.data.drops)
    });
  });
  return (
    <div>
      <h1>Here's the data: {eventData} BRUH HERE'S A CHANGE BRUH MINEBTHS</h1>
    </div>
  )
}

export default App;