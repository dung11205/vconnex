const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session'); //  Thêm dòng này

dotenv.config();

if (!process.env.MONGODB_URI) {
  console.error(" Thiếu MONGODB_URI trong file .env");
  process.exit(1);
}

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  Sử dụng express-session
app.use(session({
  secret: 'vconnex_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // 1 giờ
}));

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(' MongoDB connected'))
  .catch(err => {
    console.error(' MongoDB error:', err);
    process.exit(1);
  });

// Routes
const productRoutes = require('./routes/product.routes');
const consultationRoutes = require('./routes/consultation.routes');
const adminRoutes = require('./routes/admin.routes');

app.use('/products', productRoutes);
app.use('/consultation', consultationRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.render('index');
});
// // Trang dashboard admin (hiển thị bản ghi chưa tư vấn)
// router.get('/', requireLogin, async (req, res) => {
//   try {
//     const consultations = await Consultation.find({ status: { $ne: 'done' } }).sort({ createdAt: -1 });
//     res.render('admin', { consultations });
//   } catch (err) {
//     res.status(500).send('Lỗi khi tải danh sách tư vấn.');
//   }
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
