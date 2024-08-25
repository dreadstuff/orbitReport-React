import React from "react";
import satData from "./satData";
import './styling.css'

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button> //iterates over displaySats using .map() - creates three buttons
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button> 
    </div>
  );
};

export default Buttons;


//4 buttons total