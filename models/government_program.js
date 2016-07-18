const mongoose = require('mongoose')

const Government_ProgramSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  type: Array,
  image: String
})

let Government_Program = mongoose.model('Government_Program', Government_ProgramSchema)

module.exports = Government_Program
