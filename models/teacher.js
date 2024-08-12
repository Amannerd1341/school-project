const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: Date,
  contact: String,
  salary: Number,
  assignedClass: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;