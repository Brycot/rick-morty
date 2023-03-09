const { Favorite } = require('../DB_connection');

const getCharDetail = async (req, res) => {
    const id = req.params;

    try {
        const character = await Favorite.findByPk(id);
        await character.destroy();
        res.status(200).json(character);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getCharDetail };
