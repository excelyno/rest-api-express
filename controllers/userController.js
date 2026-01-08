const userModel = require('../models/userModel')

//get all user
const getAllUsers = (req, res) => {
    const data = userModel.findAll()
    res.status(200).json({
        message: 'get all users success',
        data: data
    })
    console.log("akses ke get all users")
}

//get single user
const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    const data = userModel.findById(id)
    
    if(!data){
        return res.status(404).json({message: 'User not found'})
    }
    res.status(200).json({
        message: "get user details success",
        data: data
    })
}



//create user (post)
const createUser = (req, res) => {
    const {name, email } = req.body

    if(!name || !email){
        return res.status(400).json({message: 'name and email are required'})
    }
    const newUser = userModel.create({name, email})

    res.status(201).json({
        message: "user created successfully",
        data: newUser
    })

}

//update user (put/patch)
const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, email} = req.body;
    const updatedUser = userModel.update(id, {name, email})

    if(!updatedUser){
        return res.status(404).json({message: 'user not found'})
    }

    res.json({
        message: 'user updated successfully',
        data: updatedUser
    })

}

//delete user (delete)
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)
    const success = userModel.remove(id)
    
    if(!success){
        return res.status(404).json({ message: 'user not found'})
    }

    res.json({message: 'User deleted successfully'})
}

module.exports = { getAllUsers , getUserById, createUser, updateUser, deleteUser}