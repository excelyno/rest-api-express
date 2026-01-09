const User = require('../models/userModel');

// 1. Ambil Semua User
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: 'Success', data: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Ambil User by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. Tambah User (Create)
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: 'User berhasil dibuat', data: user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4. Update User
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
        res.status(200).json({ message: 'User updated', data: user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Hapus User
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
        res.status(200).json({ message: 'User berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PENTING: Export semua fungsi dalam object
module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };