import { useState, useReducer, useMemo, useRef, useCallback } from "react";

import useCharacters from "../../hooks/useCharacters";
import Character from "../Character";
import "./Characters.css";
import Search from "../Search";

const API = "https://rickandmortyapi.com/api/character";

const initialState = {
    favorites: [],
};

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        default:
            return state;
    }
};

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setsearch] = useState("");
    const searchInput = useRef(null);

    const characters = useCharacters(API);

    const handleFavorite = (favorite) => {
        dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    };

    const handleSearch = useCallback(() => {
        setsearch(searchInput.current.value);
    }, []);

    const filteredUsers = useMemo(
        () =>
            characters.filter((user) => {
                return user.name.toLowerCase().includes(search.toLowerCase());
            }),
        [characters, search]
    );

    return (
        <main className="Characters">
            <Search
                search={search}
                searchInput={searchInput}
                handleSearch={handleSearch}
            />
            <section className="favorites__container">
                {favorites.favorites.map((favorite) => (
                    <img
                        key={favorite.id}
                        className="favorite_character"
                        src={favorite.image}
                    ></img>
                ))}
            </section>

            <section className="characters__container">
                {filteredUsers.map((character) => (
                    <Character
                        key={character.id}
                        character={character}
                        onFavorite={handleFavorite}
                    />
                ))}
            </section>
        </main>
    );
};

export default Characters;
