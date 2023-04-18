import { useEffect, useState } from "react";
import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Movies from "../Movies/Movies";

const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
}&language=en-US`;

const Main = () => {
    const [url, setUrl] = useState(genreUrl);
    const [genre, setGenre] = useState("comedy");
    const [genres, setGenres] = useState([]);
    const [year, setYear] = useState({
        label: "Year",
        min: 1990,
        max: 2017,
        step: 1,
        value: { min: 2000, max: 2017 },
    });
    const [rating, setRating] = useState({
        label: "Rating",
        min: 0,
        max: 10,
        step: 1,
        value: { min: 8, max: 10 },
    });
    const [runtime, setRuntime] = useState({
        label: "Runtime",
        min: 0,
        max: 300,
        step: 15,
        value: { min: 60, max: 120 },
    });

    const onGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const onChange = (data) => {
        switch (data.type) {
            case "Year":
                setYear((prevYear) => ({
                    ...prevYear,
                    value: data.value,
                }));
                break;
            case "Rating":
                setRating((prevRating) => ({
                    ...prevRating,
                    value: data.value,
                }));
                break;
            case "Runtime":
                setRuntime((prevRuntime) => ({
                    ...prevRuntime,
                    value: data.value,
                }));
                break;
            default:
                break;
        }
    };

    return (
        <section className="main">
            <Navigation
                onChange={onChange}
                onGenreChange={onGenreChange}
                setGenres={setGenres}
                genre={genre}
                genres={genres}
                year={year}
                rating={rating}
                runtime={runtime}
                url={url}
            />
            <Movies />
        </section>
    );
};

export default Main;
