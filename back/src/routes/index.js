const { Router } = require('express');

var { getCharById } = require('../controllers/getCharById.js');
var { getCharDetail } = require('../controllers/getCharDetail.js');
const { getAllChars } = require('../controllers/getAllChars.js');
var { addFav, getFavs, deleteFav } = require('../controllers/favController.js');

const router = Router();

router.get('/characters', getAllChars);
router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.post('/fav', addFav);
router.get('/fav', getFavs);
router.delete('/fav/:id', deleteFav);

module.exports = router;
