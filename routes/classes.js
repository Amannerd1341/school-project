const express = require('express');
const router = express.Router();
const { Class } = require('../models');

router.get('/', async (req, res) => {
  try {
    const classes = await Class.find().populate('students');
    res.json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, year, teacher } = req.body;
    const newClass = new Class({ name, year, teacher });
    await newClass.save();
    res.json(newClass);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid request' });
  }
});

module.exports = router;