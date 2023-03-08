import "./App.css";
import { MapContainer, TileLayer } from 'react-leaflet';

import dataGeo from '../data.json'
import MapLeaflet from "../components/MapLeaft";

function App() {
  const position = [-15.179319, -53.584374];
  return (
    <div className="App">
      <p className="title">Gestão de Pontos no Mapa</p>
      <MapContainer
        center={position}
        zoom={15}
        maxZoom={20}
        style={{ width: '100%', height: '90vh' }}
        zoomControl={false}
        language="pt"
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
        />
        <MapLeaflet mapData={dataGeo.features} position={position}/>
      </MapContainer>
    </div>
  );
}

export default App;
