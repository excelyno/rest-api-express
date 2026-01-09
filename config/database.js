const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017');
        console.log(`MongoDB Terkoneksi: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Keluar dari proses jika gagal konek
    }
};

module.exports = connectDB;