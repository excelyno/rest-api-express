const mongoose = require('mongoose');
// db nya pake MongoDB = nonSQL database 
//artinya kita tidak menggunakan bahasa SQL atau queri sql dalam relasinya
// tapi model model seperti one to many, many to many and campurannya itu masi bisa dijalankan
//gampangan mana atau mudah dimengerti yang mana ?

//gampangan kita pake nonSQl, kenapa? dikarenakan kita bisa menggunakan JSON sebagai formatnya json ? Javascript object notation

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


//itu ada namanya arsitektur MVC
// mvc adalah = models, view and controll

//models itu gunanya membuat schema database untuk users atau apa saja yang dibuuth kan untuk berelasi dengan db