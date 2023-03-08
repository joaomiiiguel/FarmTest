import { useCallback, useEffect, useState } from 'react';
import { GeoJSON, ZoomControl, Marker } from 'react-leaflet';
import L from 'leaflet'

import ListMarker from '../ListaPontos'
import ActionModal from '../ActionModal'

import MarkerIcon from '../../assets/Mark.svg'
import MarkerMoveIcon from '../../assets/MarkMove.svg'


export default function MapLeaflet({ mapData, position }) {
    const [markerSeleted, setMarkerSelected] = useState(false)
    const [listMarkers, setListMarkers] = useState([])


    const MarkFarmIcon = new L.Icon({
        iconUrl: MarkerIcon
    })
    const MarkMoveFarmIcon = new L.Icon({
        iconUrl: MarkerMoveIcon
    })

    const addMarker = useCallback((listMarkers) => {
        setListMarkers(listMarkers => [...listMarkers, {
            idMarker: listMarkers.length + 1,
            createdAt: new Date(),
            lat: -53.584374,
            lng: -15.179319
        }])
        console.log('new');
    }, [],)

    function deleteMarker() {
        setMarkerSelected(!markerSeleted)
        console.log(listMarkers);
    }
    function deleteAllMarkers() {
        setListMarkers([])
    }

    function clickMarker() {
        setMarkerSelected(!markerSeleted)
        console.log(listMarkers, setListMarkers);
        console.log('se');
    }

    useEffect(() => {
        console.log(listMarkers);
    }, [listMarkers])

    return (
        <div>
            <ZoomControl position='topright' />
            <ListMarker dataList={listMarkers} />
            <ActionModal
                listMarkers={listMarkers}
                markerSelected={markerSeleted}
                deleteAllFunction={() => deleteAllMarkers()}
                deleteFunction={() => deleteMarker()}
                addMarkerFunction={() => addMarker()}
            />
            <Marker draggable editable
                position={position}
                icon={!markerSeleted ? MarkFarmIcon : MarkMoveFarmIcon}
            />
            {listMarkers.map(marker => (
                <Marker key={marker.idMarker} draggable editable
                    position={[marker.lat, marker.lng]}
                    icon={!markerSeleted ? MarkFarmIcon : MarkMoveFarmIcon}
                />
            )
            )}
            <GeoJSON data={mapData} />
        </div>
    );
}
