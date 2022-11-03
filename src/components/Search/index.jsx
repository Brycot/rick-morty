import React from "react";
import './Search.css'
function Search({ search, searchInput, handleSearch }) {
    return (
        <section className="InputSearch-Container">
            <input
                type="text"
                ref={searchInput}
                value={search}
                onChange={handleSearch}
            />
        </section>
    );
}

export default Search;
