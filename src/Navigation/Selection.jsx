import React, { useState } from "react";
import "./Selection.css";

const Selection = () => {
    const [genre, setGenre] = useState("comedy");

    const onGenreChange = (event) => {
        setGenre(event.target.value);
    };

    return (
        <div className="selection">
            <label>Genre</label>
            <select value={genre} onChange={onGenreChange}>
                <option value="comedy">Comedy</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
            </select>
        </div>
    );
};

export default Selection;
