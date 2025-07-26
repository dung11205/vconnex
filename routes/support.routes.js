const express = require('express');
const router = express.Router();

// get man hinh ho tro
router.get('/', (req, res) => {
  res.render('support'); 
});

module.exports = router;
