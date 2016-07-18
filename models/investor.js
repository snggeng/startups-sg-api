const mongoose = require('mongoose')

const InvestorSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  type: Array,
  image: String
})

let Investor = mongoose.model('Investor', InvestorSchema)

module.exports = Investor
