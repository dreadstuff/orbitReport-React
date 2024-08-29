import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React, { useState } from 'react'; //hook state management
import satData from "./components/satData"; //satellite data file

function App() {
  //console.log(satData) - tests the satdata fetch (confirmed)
  const [sat, setSat] = useState(satData); //x - useState hook for satellite data
  const displaySats = [...new Set(satData.map((data) => data.operational))]; //x - extracts orbitType data for filtering/display

  //x filters for sat match
  const filterByType = (currentType) => { //type of orbit user wants to filter
    const displaySats = satData.filter((newSatDisplay) => { //
      return newSatDisplay.operational === currentType;
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