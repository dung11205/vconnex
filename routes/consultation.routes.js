// routes/consultation.routes.js
const express = require('express');
const router = express.Router();
const Consultation = require('../models/consultation.model');

// POST /consultation
router.post('/', async (req, res) => {
  try {
    const { name, phone, solution, message } = req.body; // ✅ Thêm message vào đây

    if (!name || !phone || !solution) {
      return res.status(400).json({ success: false, message: "Thiếu thông tin" });
    }

    const newConsultation = new Consultation({ name, phone, solution, message }); // ✅ Giờ message đã được khai báo
    await newConsultation.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Error saving consultation:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

module.exports = router;
