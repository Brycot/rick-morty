import React from "react";
import ThemeContext from "../../context/Context";
import { FiSun } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import "./Header.css";
function Header() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const handleClick = () => {
        setTheme(!theme);
    };
    return (
        <div className="Header">
            <h1 className={`${theme ? "h1-dark" : "h1-light"}`}>
                Rick&Morty
            </h1>
            <button
                className={`${theme ? "button-dark" : "button-light"}`}
                type="button"
                onClick={() => handleClick()}
            >
                {theme ? <FiSun /> : <FiStar />}
            </button>
        </div>
    );
}

export default Header;
