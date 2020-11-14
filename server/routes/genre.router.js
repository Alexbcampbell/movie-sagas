const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM "genres";`)
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.log('error in getting genres', error);
      res.sendStatus(500);
    });
  res.sendStatus(500);
});

module.exports = router;
