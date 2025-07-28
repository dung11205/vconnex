// routes/consultation.routes.js
const express = require('express');
const router = express.Router();
const Consultation = require('../models/consultation.model');

// POST /consultation
router.post('/', async (req, res) => {
  try {
    console.log("📦 req.body nhận được:", req.body);
    const { name, phone, solution, message, email, location } = req.body;

    // Kiểm tra tất cả các trường bắt buộc
    if (!name || !phone || !solution || !email || !location) {
      return res.status(400).json({ success: false, message: "Thiếu thông tin bắt buộc" });
    }

    const newConsultation = new Consultation({
      name,
      phone,
      solution,
      message,
      email,
      location
    });

    await newConsultation.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Error saving consultation:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});
  
module.exports = router;
