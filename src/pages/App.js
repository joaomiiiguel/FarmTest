import { useState, useEffect } from "react";
import "./App.css";
import MapComp from "../components/Map";
import dataGeo from '../geo.json'

function App() {
  const [map, setMap] = useState(null)


  async function loadAreaMap() {
    setMap(dataGeo.features[0])
    console.log('Maps Geo:', map);
  }
  
  useEffect(() => {
    loadAreaMap()
  }, [])


  return (
    <div className="App">
      <MapComp dataMap={map} />
    </div>
  );
}

export default App;
