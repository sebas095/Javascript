var express = require('express');
var router = express.Router();

/* app.com/app/ */

router.get('/', (req, res) => {
  /* Buscar el usuario */
  res.render("./app/home");
});

module.exports = router;
