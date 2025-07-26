const express = require('express');
const router = express.Router();

// Route GET hiển thị trang công trình tiêu biểu
router.get('/', (req, res) => {
  res.render('featured'); // Không cần truyền biến
});

module.exports = router;
