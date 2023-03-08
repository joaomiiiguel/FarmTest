import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, ZoomControl, useMapEvents, Marker } from 'react-leaflet';
// import L from "leaflet";


import ListMarker from '../ListaPontos'
import ActionModal from '../ActionModal'




export default function MapLeaflet({ mapData }) {
    const [listMarkers, setListMarkers] = useState([])
    const position = [-15.179319, -53.584374];

    function addMarker(Object) {
        setListMarkers(listMarkers => [...listMarkers, Object])
    }
    function deleteMarker() {
        console.log(listMarkers);
    }
    function deleteAllMarkers() {
        setListMarkers([])
    }

    function MyComponent() {
        useMapEvents({
            click: (e) => {
                const { lat, lng } = e.latlng;
                addMarker(
                    {
                        idMarker: listMarkers.length + 1,
                        createdAt: new Date(),
                        lat: lat,
                        lng: lng
                    })
            }
        })
        return null;
    }


    useEffect(() => {
        console.log(listMarkers);
    }, [listMarkers])


    return (
        <MapContainer
            center={position}
            zoom={15}
            maxZoom={20}
            style={{ width: '100%', height: '90vh' }}
            zoomControl={false}
        >
            <TileLayer
                attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
            />
            <ZoomControl position='topright' />
            <ListMarker dataList={listMarkers} />
            <ActionModal
                listMarkers={listMarkers}
                markerSelected={false}
                deleteAllFunction={() => deleteAllMarkers()}
                deleteFunction={() => deleteMarker()}
                addMarkerFunction={() => addMarker()}
            />
            <MyComponent />
            {listMarkers.map(marker => (
                <Marker key={marker.idMarker} position={[marker.lat, marker.lng]} />
            )
            )}
            <GeoJSON data={mapData} />
        </MapContainer>
    );
}
