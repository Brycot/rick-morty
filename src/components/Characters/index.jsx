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
    
    // Añadir a Favoritos
    const handleFavorite = (favorite) => {
        // verifico que no este añadido en favoritos
        
        // const isInclude = favorites.favorites.find((character) => character.id === favorite.id)
        const isInclude = favorites.favorites.includes(favorite)
        console.log(isInclude);
        if (!isInclude) {
            dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
        } else {
            console.log('ya esta en favoritos');
        }
    };
    // Funcion para buscar personaje
    const handleSearch = useCallback(() => {
        setsearch(searchInput.current.value);
    }, []);
    // usuarios filtrados si estoy usando algun termino de busqueda
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
                        onFavorite={() => {
                            handleFavorite(character);
                        }}
                        favorites={favorites.favorites}
                    />
                ))}
            </section>
        </main>
    );
};

export default Characters;
