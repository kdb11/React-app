import { useState } from "react"
import { Movie } from "./models/Movie";

export function Movies() {
    const [movies, setMovies] = useState([]);
    const [titel, setTitel] = useState("0");
    const [year, setyear] = useState(0);

    const HandleTitelChange = (e) => {
        setTitel(e.target.value);
    };

    const HandleYearChange = (e) => {
        setyear(e.target.value);
    };

    const HandleSave = (e) => {
        setMovies([...movies, new Movie(titel, year)]);
    };

    let renderNewMovie = movies.map((Movie, i) => {
        return (
        <>
        <p key={i}>
           Movie: {Movie.titel} from {Movie.year}
        </p>
        </>
        )
        
    });

    return <div>
        <p>Movies</p>
        <input type="text" placeholder="Titel" onChange={HandleTitelChange} value={titel}/>
        <input type="text" placeholder="Year" onChange={HandleYearChange} value={year}/>
        <button type="button" onClick={HandleSave}>Save Movie</button>
        {renderNewMovie}
    </div>
}