import { useState } from "react"
import Location from "./Location"
//14.6113338545211, 121.11348532629556

function Autocomplete() {
    const NOMINATIM_ENDPT = "https://nominatim.openstreetmap.org/"


    const [locRes, setLocRes] = useState([{ "place_id": 1234, "display_name": "Cainta Rizal" }, { "place_id": 7531, "display_name": "MARIKINA RIZAL" }])


    console.log(locRes);


    return (
        <div>
            <form action="">
                <input type="text" />
                <button type='submit'>SUBMIT</button>
            </form>

            {locRes.map((loc) => {
                console.log("LOC: ", loc);
                return <Location key={loc.place_id} location={loc.display_name} />
            })}




        </div>
    )
}

export default Autocomplete