const express = require('express');
const exercisesRoutes = require('./routes/exercisesRoutes');
const workoutsRoutes = require('./routes/workoutsRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/exercises', exercisesRoutes);
app.use('/workouts', workoutsRoutes);
app.use('/users', usersRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
