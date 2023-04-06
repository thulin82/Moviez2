import { useEffect, useState } from "react";
import "./Movies.css";
import MovieListItem from "./MovieListitem";

const movies = ["The Godfather", "The Shawshank Redemption", "The Dark Knight"];

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.log(error));

        console.log("Before or after data?");
    }, []);

    return (
        <section>
            <ul className="movies">
                {movies.map((movie, index) => (
                    <MovieListItem key={index.toString()} title={movie.title} />
                ))}
            </ul>
        </section>
    );
};

export default Movies;
