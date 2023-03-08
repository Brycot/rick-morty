import { useContext } from "react";
import ThemeContext from "../../context/Context";
import "./Character.css";

function Character({ character, onFavorite, favorites }) {
    const { theme } = useContext(ThemeContext);
    const isLive = character.status === "Alive";
    const isFavorite = favorites.includes(character);

    return (
        <div className="Character__container">
            <figure>
                <img src={character.image} alt="" />
            </figure>
            <div className={theme ? 'character__info' : 'character__info-light'}>
                <h3>{character.name}</h3>
                <p>
                    <span>Gender:</span> {character.gender}
                </p>
                <span>
                    {" "}
                    <span className={isLive ? "isLive" : "isDeath"}></span>
                    {character.status} - {character.species}
                </span>
                <p>
                    <span>Origin:</span> {character.origin.name}
                </p>
                <p>
                    <span>Last View:</span> {character.location.name}
                </p>
                <button className={isFavorite ? "isFavorite" :'favorite'} type="button" onClick={() => onFavorite()}>
                    {isFavorite ? "FAVORITE" :'ADD TO FAVORITE'}
                </button>
            </div>
        </div>
    );
}

export default Character;
