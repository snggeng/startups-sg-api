const mongoose = require('mongoose')

const CoSpaceSchema = mongoose.Schema({
  name: String,
  address: String,
  description: String,
  website: String,
  logo: String
})

let CoSpace = mongoose.model('CoSpace', CoSpaceSchema)

module.exports = CoSpace
