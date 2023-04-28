import { useEffect, useState } from "react";
import "./Movie.css";
import LoadingMovie from "./LoadingMovie";

const Movie = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({});
    return (
        <>
            <div class="movie-page">Movie</div>;
        </>
    );
};

export default Movie;
