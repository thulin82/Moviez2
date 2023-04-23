import "./Movies.css";
import MovieListItem from "./MovieListItem";

const Movies = ({ movies }) => {
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
