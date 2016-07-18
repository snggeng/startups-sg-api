const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  type: Array,
  date: String,
  image: String
})

let Event = mongoose.model('Event', EventSchema)

module.exports = Event
