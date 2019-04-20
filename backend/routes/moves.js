var express = require('express');
var router = express.Router();
const moveControler = require('../controllers/move.controller');

/* GET Moves */
router.get('/', async function(req, res, next) {

  let moves = await moveControler.fiandAll() || [];

  return res.status(200).send({
    success: 'true',
    moves
  });

});

module.exports = router;
