import React from "react";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button> //iterates over displaySats using .map() - creates three buttons
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button> //button displays all satellites
    </div>
  );
};

export default Buttons;


//4 buttons total