import { GoogleMap, useJsApiLoader, Marker, Polygon } from '@react-google-maps/api';

import ListaPontos from './ListaPontos';
import ActionModal from './ActionModal'


const containerStyle = {
    width: '100%',
    height: '90vh'
};

const center = {
    lat: 24.886, lng: -70.268
};

export default function MapComp() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_MAPS
    })

    const paths = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.19 }
    ]

    const options = {
        fillColor: "lightblue",
        fillOpacity: 1,
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    }
    const onLoad = polygon => {
        console.log("polygon: ", polygon);
    }


    if (!isLoaded) {
        return <p>Carregando...</p>
    }

    return (
        isLoaded ?
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                mapTypeId="satellite"
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                }}
            >
                <Polygon
                    onLoad={onLoad}
                    paths={paths}
                    options={options}
                />
                <Marker position={center} />
                <ListaPontos />
                <ActionModal />
            </GoogleMap >
            :
            <div>
                <p>Carregando</p>
            </div>

    )
}
