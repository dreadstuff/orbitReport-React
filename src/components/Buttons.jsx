import React from "react";
import satData from "./satData";
import './styling.css'


//params: filterByType - filter satellites on orbit type, setSat - reset function to show all satellites, displaySats - array of unique orbit type to create a button for each
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => ( //iterates over each orbit type, creates button - onclick initiates the filter
        <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button> 
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>//second onclick resets to show all orbits
  );
};

export default Buttons;


//4 buttons total