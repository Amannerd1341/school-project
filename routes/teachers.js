const express = require('express');
const router = express.Router();
const { Teacher } = require('../models');

router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find().populate('assignedClass');
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, gender, dob, contact, salary, assignedClass } = req.body;
    const newTeacher = new Teacher({ name, gender, dob, contact, salary, assignedClass });
    await newTeacher.save();
    res.json(newTeacher);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid request' });
  }
});

module.exports = router;