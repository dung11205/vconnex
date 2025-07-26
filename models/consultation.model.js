const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  solution: { type: [String], required: true },
  message: { type: String },
  email: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['pending', 'done'], default: 'pending' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Consultation', consultationSchema);
