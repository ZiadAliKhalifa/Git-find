import SearchBox from "../SearchBox/SearchBox";
import header from "../../assets/Git-find-logos_transparent.png"
import "./Container.css"

const Container = () => {

    return (
        <>
            <div className="search-box-container">
                <img src={header} alt="Logo" className="header" />
                <SearchBox />
            </div>
        </>
    );
}

export default Container;

