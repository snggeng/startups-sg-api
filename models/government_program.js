const mongoose = require('mongoose')

const Government_ProgramSchema = mongoose.Schema({
  name: String,
  address: String,
  description: String,
  website: String,
  logo: String
})

let Government_Program = mongoose.model('Government_Program', Government_ProgramSchema)

module.exports = Government_Program
