import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React, { useState } from 'react';
import satData from "./components/satData";

function App() {
  //console.log(satData) - tests the satdata fetch (confirmed)
  const [sat, setSat] = useState(satData); //x
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; //x

  //x filters for sat match
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  }

  //x
  return (
    <div> 
      <Banner />
      <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;