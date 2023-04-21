import { useEffect, useState } from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";

const Movies = ({ url }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
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
    }, [url]);

    return (
        <section>
            <ul className="movies">
                {movies.map((movie, index) => (
                    <MovieListItem key={movie.id} movie={movie} />
                ))}
            </ul>
        </section>
    );
};

export default Movies;
