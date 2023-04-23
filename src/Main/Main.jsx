import { useEffect, useState } from "react";
import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Movies from "../Movies/Movies";

const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
}&language=en-US`;
const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const Main = () => {
    const [url, setUrl] = useState(genreUrl);
    const [moviesUrl, setMoviesUrl] = useState(movieUrl);
    const [genre, setGenre] = useState("Comedy");
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [year, setYear] = useState({
        label: "Year",
        min: 1990,
        max: 2023,
        step: 1,
        value: { min: 2010, max: 2023 },
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

    useEffect(() => {
        fetchMovies(moviesUrl);
    }, [moviesUrl]);

    const fetchMovies = (m_url) => {
        fetch(m_url)
            .then((response) => response.json())
            .then((data) => storeMovies(data))
            .catch((error) => console.log(error));
    };

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
        setTotalPages(data.total_pages);
    };

    const generateUrl = () => {
        const selectedGenre = genres.find((g) => g.name === genre);
        const genreId = selectedGenre.id;

        const createdUrl =
            `https://api.themoviedb.org/3/discover/movie?` +
            `api_key=${import.meta.env.VITE_TMDB_API_KEY}&` +
            `language=en-US&sort_by=popularity.desc&` +
            `with_genres=${genreId}&` +
            `primary_release_date.gte=${year.value.min}-01-01&` +
            `primary_release_date.lte=${year.value.max}-12-31&` +
            `vote_average.gte=${rating.value.min}&` +
            `vote_average.lte=${rating.value.max}&` +
            `with_runtime.gte=${runtime.value.min}&` +
            `with_runtime.lte=${runtime.value.max}&` +
            `page=${page}`;

        setMoviesUrl(createdUrl);
    };

    const onGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const onSearchButtonClick = () => {
        generateUrl();
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
                onSearchButtonClick={onSearchButtonClick}
                genre={genre}
                genres={genres}
                year={year}
                rating={rating}
                runtime={runtime}
                url={url}
            />
            <Movies movies={movies} />
        </section>
    );
};

export default Main;
