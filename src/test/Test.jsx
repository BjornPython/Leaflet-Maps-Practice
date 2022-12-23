import { useEffect } from 'react';
import { MapContainer, useMap, TileLayer, } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const center = [52.22977, 21.01178];

const GetCoordinates = () => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        let latLong


        map.on('click', (e) => {
            latLong = e.latlng;
            console.log(latLong);
        })


    }, [map])


    return null

}

const MapWrapper = () => {
    return (
        <div className="test">
            <MapContainer center={center} zoom={18} scrollWheelZoom={true} style={{ height: "500px", width: "70%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GetCoordinates />

            </MapContainer>
        </div>

    )
}

export default MapWrapper;