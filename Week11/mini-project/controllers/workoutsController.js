const knex = require('../config/knexconnect');

exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await knex('workouts')
      .select('workouts.*', knex.raw('json_agg(exercises.*) as exercises'), 'users.username as created_by')
      .leftJoin('workout_exercises', 'workouts.id', 'workout_exercises.workout_id')
      .leftJoin('exercises', 'workout_exercises.exercise_id', 'exercises.id')
      .leftJoin('users', 'workouts.created_by', 'users.id')
      .groupBy('workouts.id', 'users.username');
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await knex('workouts')
      .select('workouts.*', knex.raw('json_agg(exercises.*) as exercises'))
      .leftJoin('workout_exercises', 'workouts.id', 'workout_exercises.workout_id')
      .leftJoin('exercises', 'workout_exercises.exercise_id', 'exercises.id')
      .where('workouts.id', id)
      .groupBy('workouts.id')
      .first();
    if (workout) {
      res.status(200).json(workout);
    } else {
      res.status(404).json({ error: 'Workout not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createWorkout = async (req, res) => {
  const trx = await knex.transaction();
  try {
    const { title, description, created_by, exercises } = req.body; // `exercises` is an array of exercise IDs
    const [{ id }] = await trx('workouts').insert({ title, description, created_by: parseInt(created_by) }).returning('id');
    
    const workoutExercises = exercises.map(exercise_id => ({
      workout_id: id,
      exercise_id: parseInt(exercise_id)
    }));

    await trx('workout_exercises').insert(workoutExercises);

    await trx.commit();
    res.status(201).json({ id });
  } catch (error) {
    await trx.rollback();
    res.status(500).json({ error: error.message });
  }
};

exports.updateWorkout = async (req, res) => {
  const trx = await knex.transaction();
  try {
    const { id } = req.params;
    const { title, description, created_by, exercises } = req.body; // `exercises` is an array of exercise IDs

    const count = await trx('workouts').where({ id }).update({ title, description, created_by });
    if (!count) {
      await trx.rollback();
      return res.status(404).json({ error: 'Workout not found' });
    }

    await trx('workout_exercises').where({ workout_id: id }).del();

    const workoutExercises = exercises.map(exercise_id => ({
      workout_id: id,
      exercise_id
    }));

    await trx('workout_exercises').insert(workoutExercises);

    await trx.commit();
    res.status(200).json({ message: 'Workout updated successfully' });
  } catch (error) {
    await trx.rollback();
    res.status(500).json({ error: error.message });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const count = await knex('workouts').where({ id }).del();
    if (count) {
      res.status(200).json({ message: 'Workout deleted successfully' });
    } else {
      res.status(404).json({ error: 'Workout not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
