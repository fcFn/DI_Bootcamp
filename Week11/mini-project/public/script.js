document.addEventListener('DOMContentLoaded', () => {
    const entityForm = document.getElementById('entity-form');
    const entityType = document.getElementById('entity-type');
    const userSelectContainer = document.getElementById('user-select-container');
    const userSelect = document.getElementById('user-select');
    const exerciseFields = document.getElementById('exercise-fields');
    const workoutFields = document.getElementById('workout-fields');
    const userFields = document.getElementById('user-fields');
    const exercisesTableBody = document.querySelector('#exercises-table tbody');
    const workoutsTableBody = document.querySelector('#workouts-table tbody');
    const usersTableBody = document.querySelector('#users-table tbody');
    const exerciseSelectContainer = document.getElementById('exercise-select-container');
    const addExerciseRowButton = document.getElementById('add-exercise-row');

    const fetchUsers = async () => {
        const response = await fetch('/users');
        const users = await response.json();
        userSelect.innerHTML = '<option value="">Select User</option>';
        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.textContent = user.username;
            userSelect.appendChild(option);
        });
    };

    const fetchExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        exercisesTableBody.innerHTML = '';
        exercises.forEach(exercise => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${exercise.name}</td>
                <td>${exercise.description}</td>
                <td>${exercise.muscle_group}</td>
            `;
            exercisesTableBody.appendChild(row);
        });

        // Populate exercise dropdowns
        const exerciseSelects = document.querySelectorAll('.exercise-select');
        exerciseSelects.forEach(select => {
            select.innerHTML = '<option value="">Select Exercise</option>';
            exercises.forEach(exercise => {
                const option = document.createElement('option');
                option.value = exercise.id;
                option.textContent = exercise.name;
                select.appendChild(option);
            });
        });
    };

    const fetchWorkouts = async () => {
        const response = await fetch('/workouts');
        const workouts = await response.json();
        workoutsTableBody.innerHTML = '';
        workouts.forEach(workout => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${workout.title}</td>
                <td>${workout.description}</td>
                <td>${workout.created_by}</td>
                <td>${workout.exercises.map(ex => ex.name).join(', ')}</td>
            `;
            workoutsTableBody.appendChild(row);
        });
    };

    const fetchUsersTable = async () => {
        const response = await fetch('/users');
        const users = await response.json();
        usersTableBody.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
            `;
            usersTableBody.appendChild(row);
        });
    };

    entityType.addEventListener('change', () => {
        const type = entityType.value;
        exerciseFields.style.display = type === 'exercise' ? 'block' : 'none';
        workoutFields.style.display = type === 'workout' ? 'block' : 'none';
        userFields.style.display = type === 'user' ? 'block' : 'none';
        userSelectContainer.style.display = type === 'workout' ? 'block' : 'none';
        userSelectContainer.required = type === 'workout'
        // Set required attributes dynamically
        document.getElementById('exercise-name').required = type === 'exercise';
        document.getElementById('workout-title').required = type === 'workout';
        document.getElementById('user-username').required = type === 'user';
        document.getElementById('user-email').required = type === 'user';
        document.getElementById('user-password').required = type === 'user';
        Array.from(document.getElementById('workout-exercises').children).slice(1).forEach(child => child.remove());
        if (type === 'exercise' || type === 'workout') {
            fetchUsers();
            fetchExercises(); // Populate exercise dropdowns when showing the create workout form
        }
    });

    addExerciseRowButton.addEventListener('click', () => {
        const newSelect = document.createElement('select');
        newSelect.classList.add('exercise-select');
        newSelect.innerHTML = exerciseSelectContainer.querySelector('select').innerHTML;
        exerciseSelectContainer.appendChild(newSelect);
    });

    entityForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const type = entityType.value;
        let data = {};
        let url = '';
        if (type === 'exercise') {
            data = {
                name: document.getElementById('exercise-name').value,
                description: document.getElementById('exercise-description').value,
                muscle_group: document.getElementById('exercise-muscle_group').value,
                created_by: userSelect.value
            };
            url = '/exercises';
        } else if (type === 'workout') {
            data = {
                title: document.getElementById('workout-title').value,
                description: document.getElementById('workout-description').value,
                created_by: userSelect.value,
                exercises: Array.from(document.querySelectorAll('.exercise-select')).filter(select => select.value).map(select => select.value)
            };
            url = '/workouts';
        } else if (type === 'user') {
            data = {
                username: document.getElementById('user-username').value,
                email: document.getElementById('user-email').value,
                password: document.getElementById('user-password').value
            };
            url = '/users';
        }

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        entityForm.reset();
        exerciseFields.style.display = 'none';
        workoutFields.style.display = 'none';
        userFields.style.display = 'none';
        userSelectContainer.style.display = 'none';
        fetchExercises();
        fetchWorkouts();
        fetchUsersTable();
    });

    fetchExercises();
    fetchWorkouts();
    fetchUsersTable();
});
