import { useState } from "react"
import { Movie } from "./models/Movie";
import { Testingprops } from "./Testingprops";

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

    /* let renderNewMovie = movies.map((Movie, id) => {
        return (
        <>
        <p key={id}>
           Movie: {Movie.titel} from {Movie.year}
        </p>
        </>
        )
        
    }); */

    let propsTestHtml = movies.map((Movie, id) => {
        return (
        <>
        <h1 key={id}>
           <Testingprops M={Movie}/>
        </h1>
        </>
        )
        
    });

    return <div>
        <p>Movies</p>
        <input type="text" placeholder="Titel" onChange={HandleTitelChange} value={titel}/>
        <input type="text" placeholder="Year" onChange={HandleYearChange} value={year}/>
        <button type="button" onClick={HandleSave}>Save Movie</button>
        {/* {renderNewMovie} */}
        {propsTestHtml}
    </div>
}