const express = require('express');
const router = express.Router();
const Consultation = require('../models/consultation.model');

// Trang login
router.get('/login', (req, res) => {
  res.render('admin-login', { error: null });
});

// Xử lý login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // ✅ Đổi thông tin đăng nhập thành "dung" / "dung123"
  if (username === 'dung' && password === 'dung123') {
    req.session.isAdmin = true;
    return res.redirect('/admin');
  } else {
    return res.render('admin-login', { error: 'Sai tài khoản hoặc mật khẩu' });
  }
});

// Middleware bảo vệ trang /admin
function requireLogin(req, res, next) {
  if (req.session.isAdmin) {
    next();
  } else {
    res.redirect('/admin/login'); 
  }
}
router.post('/mark-done/:id', requireLogin, async (req, res) => {
  await Consultation.findByIdAndUpdate(req.params.id, { status: 'done' });
  res.redirect('/admin');
});
// Trang dashboard admin (chỉ hiển thị bản ghi chưa tư vấn)
router.get('/', requireLogin, async (req, res) => {
  try {
    const consultations = await Consultation.find({ status: { $ne: 'done' } }).sort({ createdAt: -1 });
    res.render('admin', { consultations });
  } catch (err) {
    res.status(500).send('Lỗi khi tải danh sách tư vấn.');
  }
});

// Đăng xuất
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin/login');
  });
});
// Đánh dấu đã tư vấn
router.post('/mark-done/:id', requireLogin, async (req, res) => {
  await Consultation.findByIdAndUpdate(req.params.id, { status: 'done' });
  res.redirect('/admin');
});

// Xóa bản ghi
router.post('/delete/:id', requireLogin, async (req, res) => {
  await Consultation.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
});

// Danh sách đã tư vấn xong
router.get('/done', requireLogin, async (req, res) => {
  const consultations = await Consultation.find({ status: 'done' }).sort({ updatedAt: -1 });
  res.render('admin-done', { consultations });
});
  
module.exports = router;
