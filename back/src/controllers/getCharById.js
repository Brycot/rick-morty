const { Favorite } = require('../DB_connection');

const getCharById = async (req, res) => {
    try {
        const characters = await Favorite.findAll();
        res.status(200).json(characters);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getCharById };
