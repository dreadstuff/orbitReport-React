import React from "react";
import satData from "./satData";
import './styling.css'


//params: filterByType - filter satellites on orbit type, setSat - reset function to show all satellites, displaySats - array of unique orbit type to create a button for each
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => ( //iterates over each orbit type, creates button - onclick initiates the filter
        <button className="ezy-spring-button outer" onClick={() => filterByType(sat)} key={id}><span class="button_top">{sat} Orbit</span></button> //added css
      ))}
      <button className="ezy-spring-button outer" onClick={() => setSat(satData)}><span class="button_top">All Orbits</span></button>
    </div>//second onclick resets to show all orbits and added css (pulls satData without filterByType)
  );
};

export default Buttons;


//4 buttons total