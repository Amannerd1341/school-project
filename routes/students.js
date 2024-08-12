const express = require('express');
const router = express.Router();
const { Student } = require('../models');
const Joi = require('joi');

const studentSchema = Joi.object().keys({
  name: Joi.string().required(),
  gender: Joi.string().required(),
  dob: Joi.date().required(),
  contact: Joi.string().required(),
  feesPaid: Joi.boolean().required(),
  class: Joi.string().required()
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.find().populate('class');
    if (!students) {
      return res.status(404).json({ message: 'Students not found' });
    }
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { error } = studentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, gender, dob, contact, feesPaid, class } = req.body;
    const newStudent = new Student({ name, gender, dob, contact, feesPaid, class });
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});