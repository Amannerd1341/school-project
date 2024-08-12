const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: String,
  year: Number,
  teacher: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;