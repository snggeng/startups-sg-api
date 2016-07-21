const mongoose = require('mongoose')
var algoliasearch = require('algoliasearch')

// init Algolia index
var client = algoliasearch(process.env.ALGOLIA, process.env.ALGOLIA_API)
var index = client.initIndex('startup_index')

const CoSpaceSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  image: String
})

CoSpaceSchema.post('save', function (next) {
  const cospaces = [this.toObject()]
  cospaces[0].objectID = cospaces[0]._id
  console.log(cospaces)
  index.addObjects(cospaces, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Algolia import done')
  }
)
})

CoSpaceSchema.post('remove', function (doc) {
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

let CoSpace = mongoose.model('CoSpace', CoSpaceSchema)

module.exports = CoSpace
