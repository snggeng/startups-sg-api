const mongoose = require('mongoose')
var algoliasearch = require('algoliasearch')

// init Algolia index
var client = algoliasearch(process.env.ALGOLIA, process.env.ALGOLIA_API)
var index = client.initIndex('startup_index')

const Government_ProgramSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  type: Array,
  image: String
})

Government_ProgramSchema.post('save', function (next) {
  const cospaces = [this.toObject()]
  cospaces[0].objectID = cospaces[0]._id
  cospaces[0].model = 'government-programs'
  index.addObjects(cospaces, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Algolia import done')
  }
)
})

Government_ProgramSchema.post('remove', function (doc) {
  console.log('trigger')
  index.deleteObjects([doc._id], function (err) {
    if (err) {
      console.log(err)
    }
    if (!err) {
      console.log('success')
    }
  })
})

let Government_Program = mongoose.model('Government_Program', Government_ProgramSchema)

module.exports = Government_Program
