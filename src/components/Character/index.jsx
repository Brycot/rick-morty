import "./Character.css";

function Character({ character, onFavorite }) {
    return (
        <div className="Character__container">
            <img src={character.image} alt="" />
            <div className="character__info">
                <h3>{character.name}</h3>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <button type="button" onClick={() => onFavorite(character)}>
                    add to favorite
                </button>
            </div>
        </div>
    );
}

export default Character;
