// routes/support.routes.js
const express = require('express');
const router = express.Router();
const Consultation = require('../models/consultation.model');

router.get('/', (req, res) => {
  const success = req.query.success === '1';
  const error = req.query.error === '1';
  res.render('support', { success, error });
});

router.post('/send', async (req, res) => {
  const { name, city, phone, email, message, solution } = req.body;
  console.log('[📥 Body nhận]', req.body);

  if (!name || !city || !phone || !email || !solution) {
    console.error('[⚠️ Thiếu dữ liệu bắt buộc]');
    return res.redirect('/support?error=1');
  }

  try {
    await Consultation.create({
      name,
      phone,
      email,
      message,
      location: city,
      solution: [solution],
      status: 'pending'
    });

    console.log('✅ Đã lưu thành công');
    // Gửi lại với query success=1 để hiển thị thông báo
    res.redirect('/support?success=1');
  } catch (err) {
    console.error('❌ Lỗi khi lưu MongoDB:', err);
    res.redirect('/support?error=1');
  }
});

module.exports = router;
