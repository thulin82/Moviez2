import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import LoadingMovie from "./LoadingMovie";

const Movie = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`;
        fetch(movieUrl)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setMovie(data);
            })
            .catch((error) => console.log("Error:", error));
    }, [movieId]);

    const {
        title,
        backdrop_path,
        release_date,
        genres,
        overview,
        vote_average,
        runtime,
    } = movie;

    const releaseYear = release_date ? release_date.substring(0, 4) : null;
    const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
    const backgroundStyle = {
        backgroundImage: `url(${imgUrl})`,
    };

    return (
        <div className="movie-page">
            {isLoading ? (
                <LoadingMovie />
            ) : (
                <div>
                    <div className="movie-image" style={backgroundStyle} />
                    <div className="movie-details">
                        <h1>
                            {title}
                            <span>({releaseYear})</span>
                        </h1>
                        <section className="genres">
                            {genres.map((genre, index) => (
                                <div key={genre.id}>
                                    <span>{genre.name}</span>
                                    {index < genres.length - 1 && (
                                        <span className="separator">|</span>
                                    )}
                                </div>
                            ))}
                        </section>
                        <h5>
                            Rating:
                            <span>{vote_average}</span>
                        </h5>
                        <h5>
                            Runtime:
                            <span>{`${runtime} min`}</span>
                        </h5>
                        <h4>Overview</h4>
                        <p>{overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Movie;
