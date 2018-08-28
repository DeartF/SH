const express = require('express')
const bodyParser = require('body-parser') // Для чтения данных с frontend
const morgan = require('morgan') // Библиотека для логирования
const cookieParser = require('cookie-parser') // Хранилище
const mongoose = require('mongoose') //Подключение к базе данных
const path = require('path')

mongoose.connect('mongodb://localhost/project')

const app = express()




app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '5mb'}))
app.use(cookieParser())
app.use(morgan('dev'))

app.use('/api' , require('./server/routes/'))

app.get('*', (req, res, next) => {
	res.redirect('/#' + req.originalUrl)
})

app.listen(3000, () => {
	console.log('Server listening on port 3000')
})
