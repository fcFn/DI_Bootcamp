const knex = require('../config/knexconnect');

exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await knex('exercises').select('*');
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await knex('exercises').where({ id }).first();
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExercise = async (req, res) => {
  try {
    const { name, description, muscle_group } = req.body;
    const [id] = await knex('exercises').insert({ name, description, muscle_group }).returning('id');
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, muscle_group } = req.body;
    const count = await knex('exercises').where({ id }).update({ name, description, muscle_group });
    if (count) {
      res.status(200).json({ message: 'Exercise updated' });
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const count = await knex('exercises').where({ id }).del();
    if (count) {
      res.status(200).json({ message: 'Exercise deleted' });
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
