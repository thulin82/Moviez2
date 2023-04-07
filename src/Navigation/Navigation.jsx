import React, { useState } from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";

const Navigation = () => {
    const [genre, setGenre] = useState("comedy");
    const [year, setYear] = useState({
        label: "Year",
        min: 1990,
        max: 2017,
        step: 1,
        value: { min: 2000, max: 2017 },
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

    const onGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const onChange = (data) => {
        switch (data.type) {
            case "year":
                setYear((prevYear) => ({
                    ...prevYear,
                    value: data.value,
                }));
                break;
            case "rating":
                setRating((prevRating) => ({
                    ...prevRating,
                    value: data.value,
                }));
                break;
            case "runtime":
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
        <section className="navigation">
            <Selection genre={genre} onGenreChange={onGenreChange} />
            <Slider data={year} onChange={onChange} />
            <Slider data={rating} onChange={onChange} />
            <Slider data={runtime} onChange={onChange} />
        </section>
    );
};

export default Navigation;
