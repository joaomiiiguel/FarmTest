import { useEffect, useState, useCallback } from 'react';
import { GeoJSON, ZoomControl, Marker } from 'react-leaflet';
import L from 'leaflet'

import ListMarker from '../ListaPontos'
import ActionModal from '../ActionModal'

import MarkerIcon from '../../assets/Mark.svg'
import MarkerMoveIcon from '../../assets/MarkMove.svg'


const MarkFarmIcon = new L.Icon({
    iconUrl: MarkerIcon
})
const MarkMoveFarmIcon = new L.Icon({
    iconUrl: MarkerMoveIcon
})

export default function MapLeaflet({ mapData, position }) {
    const [listMarkers, setListMarkers] = useState([])
    const [markerSeleted, setMarkerSelected] = useState(null);


    function handleAddMarker() {
        setMarkerSelected(null)
        setListMarkers(listMarkers => [...listMarkers, {
            idMarker: listMarkers.length > 0 ? listMarkers[listMarkers.length - 1].idMarker + 1 : 1,
            createdAt: new Date(),
            position: [-15.179319, -53.584374],
        }])
    }

    function handlerSelectMarker(id) {
        setMarkerSelected(id)
    }

    function handleDeleteMarker(id) {
        setListMarkers((listMarkers) => listMarkers.filter(obj => obj.idMarker !== id));
        setMarkerSelected(null);
    }

    function deleteAllMarkers() {
        setMarkerSelected(null);
        setListMarkers([])
    }


    function updateMarkerPosition(index, newPosition) {
        setListMarkers((prevMarkers) =>
            prevMarkers.map((marker, idx) => {
                if (idx === index) {
                    return { ...marker, position: newPosition };
                }
                return marker;
            })
        );
    }

    useEffect(() => {
    }, [listMarkers])

    return (
        <div>
            <ZoomControl position='topright' />
            <ListMarker dataList={listMarkers} markerSelected={markerSeleted} setMarkerSelected={setMarkerSelected} />
            <ActionModal
                listMarkers={listMarkers}
                markerSelected={markerSeleted}
                deleteAllFunction={() => deleteAllMarkers()}
                deleteFunction={() => handleDeleteMarker(markerSeleted)}
                addMarkerFunction={() => handleAddMarker()}
            />

            {listMarkers.map((marker, index) => (
                <Marker key={index} draggable editable
                    position={marker.position}
                    icon={markerSeleted === marker.idMarker ? MarkMoveFarmIcon : MarkFarmIcon}
                    eventHandlers={{
                        dragend: (e) => {
                            updateMarkerPosition(index, e.target.getLatLng());
                        },
                        click: () => {
                            handlerSelectMarker(marker.idMarker);
                        }
                    }}
                />
            ))}

            <GeoJSON data={mapData} />
        </div>
    );
}
