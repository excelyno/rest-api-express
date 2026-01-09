const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama wajib diisi']
    },
    email: {
        type: String,
        required: [true, 'Email wajib diisi'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// PENTING: Export modelnya
const User = mongoose.model('User', userSchema);
module.exports = User;