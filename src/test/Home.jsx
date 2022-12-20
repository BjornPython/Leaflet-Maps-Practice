import "./home.css"
import { useEffect, useRef, useState } from 'react';
import L, { setOptions } from "leaflet"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, useMapEvent } from "react-leaflet";
import { Popup } from "react-leaflet/Popup";
import "leaflet/dist/leaflet.css";

import { LeafletEventHandlerFnMap } from "leaflet";

function SetViewOnClick({ animateRef }) {

    const [latlongFormData, setlatlongFormData] = useState({
        lat: "",
        long: ""
    })

    const { lat, long } = latlongFormData



    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })

    return null
}



function Home() {
    const animateRef = useRef()
    console.log("MAP REF: ", animateRef);

    const markerIcon = L.icon({
        iconUrl: require("../images/icons/location.png"),
        iconRetinaUrl: require("../images/icons/location.png"),
        iconSize: [42, 42]
    })

    const [latlongFormData, setlatlongFormData] = useState({
        lat: "",
        long: ""
    })

    const { lat, long } = latlongFormData

    const changeLogilatlongnForm = (e) => {
        setlatlongFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitLatLong = (e) => {
        e.preventDefault()
        console.log("Submitting");
        console.log("LAT: ", parseFloat(lat), " LONG: ", parseFloat(long));
        setPosition([parseFloat(lat), parseFloat(long)])

    }


    const [position, setPosition] = useState([41.8719, 12.5674])





    return (
        <div className="map">

            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: "500px", width: "70%" }}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={markerIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <SetViewOnClick animateRef={animateRef} />
            </MapContainer>

            <form action="" onSubmit={submitLatLong} className="login-form">
                <input className="font" type="text" name="lat" value={lat} placeholder={"lat"} onChange={changeLogilatlongnForm} />
                <hr />
                <input className="font" type="text" name="long" value={long} placeholder={"long"} onChange={changeLogilatlongnForm} />
                <hr />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home