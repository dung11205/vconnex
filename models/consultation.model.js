const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  solution: String,
  message: String,
  status: { type: String, default: 'pending' }  // ✅ Thêm dòng này
}, {
  timestamps: true
});

module.exports = mongoose.model('Consultation', consultationSchema);