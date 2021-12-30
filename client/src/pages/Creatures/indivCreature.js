import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function IndividualCreature(props) {
  const { creatureName } = useParams();
  const [creatureData, setCreature] = useState();
  fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${creatureName}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCreature(data.data);
    });
  var creature = JSON.stringify(creatureData); //don't know why this is necessary but creatureData is undefined if i don't do it
  console.log(creatureData);
    //const createCreatureJSX(creature)
  return (
    <div>
      <h1>{`This is the page for creature named ${creatureName}`}</h1>
    </div>
  );
}

export default IndividualCreature;
