import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Movie from "./Movie/Movie";
import NotFound from "./NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/movies/:movieId">
                        <Movie />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
