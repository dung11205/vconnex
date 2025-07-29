const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');

dotenv.config();

if (!process.env.MONGODB_URI) {
  console.error("❌ Thiếu MONGODB_URI trong file .env");
  process.exit(1);
}

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Session
app.use(session({
  secret: 'vconnex_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
const productRoutes = require('./routes/product.routes');
const apiProductRoutes = require('./routes/product.api');
const consultationRoutes = require('./routes/consultation.routes');
const adminRoutes = require('./routes/admin.routes');
const featuredRoutes = require('./routes/featured.routes');
const supportRoutes = require('./routes/support.routes');

app.use('/products', productRoutes);
app.use('/api/products', apiProductRoutes);
app.use('/consultation', consultationRoutes);
app.use('/featured', featuredRoutes);
app.use('/support', supportRoutes);
app.use('/admin', adminRoutes);

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

// Solutions page
app.get('/solutions', (req, res) => {
  res.render('solutions');
});

// 404 fallback
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
