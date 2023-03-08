const { Character } = require('../DB_connection');

const getAllChars = async (req, res) => {
    try {
        const characters = await Character.findAll({
            order: [['id', 'ASC']],
        });
        res.status(200).json(characters);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAllChars };
