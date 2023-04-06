import React, { useState } from "react";
import "./Navigation.css";
import Selection from "./Selection";

const Navigation = () => {
    const [genre, setGenre] = useState("comedy");

    const onGenreChange = (event) => {
        setGenre(event.target.value);
    };

    return (
        <section className="navigation">
            <Selection genre={genre} onGenreChange={onGenreChange} />
        </section>
    );
};

export default Navigation;
