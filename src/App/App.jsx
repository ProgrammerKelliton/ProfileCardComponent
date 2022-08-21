import "./App.scss";
import ImgPerson from "../../public/images/image-victor.jpg";
import Info from "../component/info";

function App() {
    return (
        <div className="App">
            <main className="container">
                <div className="container__background"></div>
                <div className="card">
                    <img
                        className="card__person"
                        src={ImgPerson}
                        alt="One person image"
                    />
                    <div className="info">
                        <h1 className="info__name">Victor Crest</h1>
                        <span className="info__age">26</span>
                    </div>
                    <span className="card__country">London</span>
                    <div className="card__divider"></div>
                    <div className="card__infoStatus">
                        <Info value="80K" name="Followers"></Info>
                        <Info value="803K" name="Likes"></Info>
                        <Info value="1.4K" name="Photos"></Info>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
