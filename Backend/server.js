const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', todoRoutes);

mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.listen(5000, () => console.log('Server running on port 5000'));
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API. Use /api/todos to interact.');
});
