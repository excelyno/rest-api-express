const Course = require('../models/courseModel')

//get all (ada fitur sorting dan filtering)
const getAllCourses = async (req, res) => {
    try{
        //logika filter (menangkat query dari url contoh ?=semester5)
        const queryObj = {...req.query};
        //mencari data berdasarkan filter 
        //jika URL kosong maka akan ambil semua , kalo ada ?semester=5, dia filter
        const courses = await Course.find(queryObj).sort({ semester: 1}) // sorting
        res.status(200).json({
            status: 'success',
            results: courses.length,
            data: courses
        })
    } catch (error){
        res.status(500).json({message: error.message})
    };
}


//create course

const createCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'mata kuliah berhasil ditambahkan',
            data: newCourse
        })
    } catch (error) {
        if (error.code === 11000){
            return res.status(400).json({message: 'kode mata kuliah sudah ada!'})
        }
        res.status(400).json({message: error.message})
    }
}

//get single update delete

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if(!course) return res.status(404).json({message: 'Matkul tidak ditemukan'});
        res.status(200).json({ data: course });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        })
        if(!course)return res.status(404).json({message: 'Matkul tidak ditemukan'})
        res.status(200).json({message: 'Update berhasil', data: course})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id)
        if(!course) return res.status(404).json({message: 'matkul tidak ditemukan'})
        res.status(200).json({message: 'Matkul berhasil dihapus'})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = { getAllCourses, createCourse, getCourseById, updateCourse, deleteCourse}

