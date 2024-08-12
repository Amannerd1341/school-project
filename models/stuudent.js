const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: Date,
  contact: String,
  feesPaid: Boolean,
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;