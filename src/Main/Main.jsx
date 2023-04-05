import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Movies from "../Movies/Movies";

const Main = () => {
    return (
        <section className="main">
            <Navigation />
            <Movies />
        </section>
    );
};

export default Main;
