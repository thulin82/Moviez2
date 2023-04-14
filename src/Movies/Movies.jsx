import { useEffect, useState } from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";

const movies = ["The Godfather", "The Shawshank Redemption", "The Dark Knight"];

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => storeMovies(data))
            .catch((error) => console.log(error));

        const storeMovies = (data) => {
            const movies = data.results.map((result) => {
                const {
                    vote_count,
                    id,
                    genre_ids,
                    poster_path,
                    title,
                    vote_average,
                    release_date,
                } = result;
                return {
                    vote_count,
                    id,
                    genre_ids,
                    poster_path,
                    title,
                    vote_average,
                    release_date,
                };
            });
            setMovies(movies);
        };
    }, []);

    return (
        <section>
            <ul className="movies">
                {movies.map((movie) => (
                    <MovieListItem key={movie.id} movie={movie} />
                ))}
            </ul>
        </section>
    );
};

export default Movies;
