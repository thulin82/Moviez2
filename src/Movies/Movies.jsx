import "./Movies.css";
import MovieListItem from "./MovieListItem";
import { Button } from "@chakra-ui/react";

const Movies = ({ movies, page, onPageIncrease, onPageDecrease }) => {
    return (
        <section>
            <ul className="movies">
                {movies.map((movie, index) => (
                    <MovieListItem key={movie.id} movie={movie} />
                ))}
            </ul>
            <div className="pagination">
                <Button bg="orange.500" color="white" onClick={onPageDecrease}>
                    Previous
                </Button>
                <span>{`Page ${page}`}</span>
                <Button bg="orange.500" color="white" onClick={onPageIncrease}>
                    Next
                </Button>
            </div>
        </section>
    );
};

export default Movies;
