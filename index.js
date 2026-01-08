const express = require('express')
const app = express()
const PORT = 3000;

const userRoutes = require('./routes/userRoutes')

app.use(express.json())

app.get('/', (req, res) => {
    res.send("selamat datang di api mvc sederhana")
})

app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`)
})