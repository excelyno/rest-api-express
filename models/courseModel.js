const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    code : {
        type: String,
        required: [true, 'kode mata kuliah wajib di isi'],
        unique: true,
        uppercase: true,
        trim: true
    },
    name:{
        type: String,
        required: [true, 'nama mata kuliah wajib di isi']
    },
    credits: {
        type: Number,
        required: true,
        min: [1, 'minimal 1 SKS'],
        max: [6, 'maksimal 6 sks']
    },
    lecturer: {
        type: String,
        required: [true, 'nama dosen wajib di isi']
    },
    semester: {
        type: Number,
        required: true,
        min: 1,
        max: 8
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Course', courseSchema);