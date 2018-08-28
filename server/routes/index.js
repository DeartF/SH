const express = require('express')
const router = express.Router()

router.post('/login' , (req, res, next) => {
	if(req.body.email == 'admin@gmail.com' && req.body.password == 'admin'){
		var session = {id:12345}
		res.cookie('session' , JSON.stringify(session))
		res.send(session)
	} else {
		res.status(400).send('Error!')
	}
})

router.post('/logout' , (req, res, next) => {
	res.clearCookie('session')
	res.send(200)
});

// Подключение всех роутеров
router.use('/post' , require('./footwear'))

module.exports = router
