import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Movie from "./Movie/Movie";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/movies/:movieId" element={<Movie />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
