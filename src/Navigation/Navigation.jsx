import { useEffect, useState } from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";

const Navigation = (props) => {
    const {
        genre,
        genres,
        onGenreChange,
        onChange,
        year,
        rating,
        runtime,
        url,
    } = props;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => props.setGenres(data.genres)) //??
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className="navigation">
            <Selection
                genres={genres}
                genre={genre}
                onGenreChange={onGenreChange}
            />
            <Slider data={year} onChange={onChange} />
            <Slider data={rating} onChange={onChange} />
            <Slider data={runtime} onChange={onChange} />
        </section>
    );
};

export default Navigation;
