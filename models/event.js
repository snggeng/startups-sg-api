const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
  name: String,
  address: String,
  description: String,
  website: String,
  logo: String
})

let Event = mongoose.model('Event', EventSchema)

module.exports = Event
