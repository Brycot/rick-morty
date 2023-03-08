import React from "react";
import ThemeContext from "../../context/Context";

import './Search.css'
function Search({ search, searchInput, handleSearch }) {
    const { theme } = React.useContext(ThemeContext);

    return (
        <section className="InputSearch-Container">
            <input
                className={theme ? "input-dark" : "input-light"}
                type="text"
                ref={searchInput}
                value={search}
                onChange={handleSearch}
                placeholder="Filtrar Personajes"
            />
        </section>
    );
}

export default Search;
