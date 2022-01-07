import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

function IndividualCreature(props) {
  const { creatureName } = useParams();
  const [creatureData, setCreatureData] = useState();
  fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${creatureName}`);
  useEffect(() => {
    axios
      .get(`https://botw-compendium.herokuapp.com/api/v2/entry/${creatureName}`)
      .then(function (response) {
        const { data } = response;
        setCreatureData(data.data);
      });
  }, []);
  console.log(creatureData);

  const generateCreatureJSX = (creature) => {
    return (
      <div>
        <h1>{`Name: ${creature.name}`}</h1>
        <h3>{`Category: ${creature.category}`}</h3>
        <p1>{creature.description}</p1>
      </div>
    );
  };

  return (
    <div>
      {/* {creatureData === undefined && <CircularProgress />} */}
      {creatureData !== undefined && creatureData && generateCreatureJSX(creatureData)}
      {/* {creatureData === false && <h1> Creature not found</h1>} */}
    </div>
  );
}

export default IndividualCreature;
