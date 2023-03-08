import "./App.css";

import dataGeo from '../data.json'
import MapLeaflet from "../components/MapLeaft";

function App() {
  return (
    <div className="App">
      <p className="title">Gestão de Pontos no Mapa</p>
      <MapLeaflet mapData={dataGeo.features} />
    </div>
  );
}

export default App;
