import { useState } from "react"
import Location from "./Location"
//14.6113338545211, 121.11348532629556

function Autocomplete() {
    const NOMINATIM_ENDPT = "https://nominatim.openstreetmap.org"


    const [locRes, setLocRes] = useState([])
    const [inputLocation, setInputLocation] = useState({
        searchedLoc: ""
    })

    const { searchedLoc } = inputLocation

    console.log(locRes);

    const addLoc = (e) => {
        e.preventDefault()
        // setLocRes([{ "place_id": 1234, "display_name": "Cainta Rizal" }, { "place_id": 7531, "display_name": "MARIKINA RIZAL" }])
        setLocRes(searchLocations)
    }

    const changeFormData = (e) => {
        setInputLocation((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const searchLocations = async (e) => {
        e.preventDefault()
        console.log("SEARCING");
        const params = new URLSearchParams({
            q: searchedLoc,
            format: "json",
            addressdetails: 1
        })
        const locations = await fetch(`${NOMINATIM_ENDPT}/search?${params}`).then(response => response.json())
        console.log("RESPONSE: ", locations);
        setLocRes(locations)

        return locations
    }




    return (
        <div>
            <form action="" onSubmit={searchLocations}>
                <input type="text" name="searchedLoc" value={searchedLoc} onChange={changeFormData} />
                <button type='submit'>SUBMIT</button>
            </form>

            {locRes.map((loc) => {
                return <Location key={loc.place_id} location={loc.display_name} />
            })}




        </div>
    )
}

export default Autocomplete