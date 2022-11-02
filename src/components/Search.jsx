import React from "react";

function Search({ search, searchInput, handleSearch }) {
    return (
        <section>
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
