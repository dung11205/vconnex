const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('solutions'); // Tên file EJS trong thư mục views/solutions.ejs
});

module.exports = router;
