const express = require('express');
const app = express();
const PORT = 3000;

const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Selamat datang di API MVC Sederhana dengan MongoDB");
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});