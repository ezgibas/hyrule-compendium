import React, { useEffect, useState } from "react";

function App() {
  const [eventData, setEventData] = useState()
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/entry/moblin")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setEventData(data.data.description)
    });
  });
  return (
    <div>
      <h1>Here's the data: </h1>
      <p1>{eventData}</p1>
    </div>
  )
}

export default App;