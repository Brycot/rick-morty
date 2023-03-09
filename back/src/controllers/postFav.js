const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const favPosted = await Favorite.create(req.body);
        res.status(201).json(favPosted);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { postFav };
