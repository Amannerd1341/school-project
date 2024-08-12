const Joi = require('joi');

const validateRequest = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    year: Joi.number().required(),
    teacher: Joi.string().required(),
    // ...
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  next();
};

module.exports = { validateRequest };