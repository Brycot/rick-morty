const axios = require('axios');
const { Character } = require('../DB_connection');

const getApiData = async () => {
    const characters = [];

    try {
        for (let pageNumber = 1; pageNumber <= 5; pageNumber++) {
            // Hacemos la solicitud a la API de Rick & Morty
            const { data } = await axios.get(
                `https://rickandmortyapi.com/api/character?page=${pageNumber}`
            );

            data.results.forEach(
                ({ id, name, species, status, origin, gender, image }) => {
                    const newCharacter = {
                        id,
                        name,
                        species,
                        status,
                        origin: origin.name,
                        gender,
                        image,
                    };
                    characters.push(newCharacter);
                }
            );
        }
        return characters;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const saveApiData = async () => {
    const characters = await getApiData();

    try {
        await Character.bulkCreate(characters);
    } catch (error) {
        console.log({ error: error.message });
    }
};

module.exports = {
    saveApiData,
};
