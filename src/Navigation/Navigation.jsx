import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";

const Navigation = (props) => {
    const {
        genre,
        genres,
        onGenreChange,
        onChange,
        onSearchButtonClick,
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
                bg="orange.500"
                genres={genres}
                genre={genre}
                onGenreChange={onGenreChange}
            />
            <Slider data={year} onChange={onChange} />
            <Slider data={rating} onChange={onChange} />
            <Slider data={runtime} onChange={onChange} />

            <Button bg="orange.500" color="white" onClick={onSearchButtonClick}>
                Search
            </Button>
        </section>
    );
};

export default Navigation;
