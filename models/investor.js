const mongoose = require('mongoose')

const InvestorSchema = mongoose.Schema({
  name: String,
  address: String,
  description: String,
  website: String,
  logo: String
})

let Investor = mongoose.model('Investor', InvestorSchema)

module.exports = Investor
