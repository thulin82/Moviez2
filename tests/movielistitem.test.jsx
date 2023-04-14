import React from "react";
import { render, screen } from "@testing-library/react";
import MovieListItem from "../src/Movies/MovieListItem";

const mockMovie = {
    title: "The Shawshank Redemption",
    poster_path: "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    release_date: "1994-09-23",
    vote_average: 8.7,
};

describe("MovieListItem", () => {
    it("renders the movie poster, title, year, and rating", () => {
        render(<MovieListItem movie={mockMovie} />);

        const moviePoster = screen.getByAltText(mockMovie.title);
        const movieTitle = screen.getByText(mockMovie.title);
        const movieYear = screen.getByText(
            mockMovie.release_date.substring(0, 4)
        );
        const movieRating = screen.getByText(mockMovie.vote_average);

        expect(moviePoster).toBeInTheDocument();
        expect(movieTitle).toBeInTheDocument();
        expect(movieYear).toBeInTheDocument();
        expect(movieRating).toBeInTheDocument();
    });
});
