const mongoose = require('mongoose')

const FootwearSchema = mongoose.Schema({
  price: String,
  gender: String,
  model: String
})

module.exports = mongoose.model('Footwear' , FootwearSchema)
