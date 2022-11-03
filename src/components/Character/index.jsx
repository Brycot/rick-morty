import "./Character.css";

function Character({ character, onFavorite }) {
    return (
        <div className="Character__container">
            <figure>
                <img src={character.image} alt="" />
            </figure>
            <div className="character__info">
                <h3>Name: {character.name}</h3>
                <p>Gender: {character.gender}</p>
                <p className="status-p">{character.status} - {character.species}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Last View: {character.location.name}</p>
                <button type="button" onClick={() => onFavorite(character)}>
                    add to favorite
                </button>
            </div>
        </div>
    );
}

export default Character;
