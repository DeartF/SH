const express = require('express')
const router = express.Router()

const Footwear = require('.././models/Footwear.js')

// Connect all routers

router.get('/' , (req, res, next) => {
	Footwear.find()
		.exec((err, footwears) => {
			if(err) return res.send(err)
			res.send(footwears)
		})
})

router.post('/' , (req, res, next) => {
	var footwear = new Footwear({
		price: req.body.price,
		gender: req.body.gender,
		model: req.body.model
	})

	footwear.save((err, footwear) => {
		if(err) return console.log(err)
		res.send(footwear)
	})
})

router.delete('/:id' , (req, res, next) => {
	Footwear.remove({_id: req.params.id})
		.exec((err, result) => {
			if(err) return res,send(err)
			re.send(200)
		})
})

module.exports = router
