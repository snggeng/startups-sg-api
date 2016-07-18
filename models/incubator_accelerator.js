const mongoose = require('mongoose')

const Incubator_AcceleratorSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  type: Array,
  image: String
})

let Incubator_Accelerator = mongoose.model('Incubator_Accelerator', Incubator_AcceleratorSchema)

module.exports = Incubator_Accelerator
