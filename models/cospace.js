const mongoose = require('mongoose')

const CoSpaceSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  image: String
})

let CoSpace = mongoose.model('CoSpace', CoSpaceSchema)

module.exports = CoSpace
