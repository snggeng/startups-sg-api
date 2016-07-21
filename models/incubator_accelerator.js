const mongoose = require('mongoose')
var algoliasearch = require('algoliasearch')

// init Algolia index
var client = algoliasearch(process.env.ALGOLIA, process.env.ALGOLIA_API)
var index = client.initIndex('startup_index')

const Incubator_AcceleratorSchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  description: String,
  logo: String,
  type: Array,
  image: String
})

Incubator_AcceleratorSchema.post('save', function (next) {
  const cospaces = [this.toObject()]
  cospaces[0].objectID = cospaces[0]._id
  cospaces[0].model = 'incubator-accelerators'
  index.addObjects(cospaces, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Algolia import done')
  }
)
})

Incubator_AcceleratorSchema.post('remove', function (doc) {
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

let Incubator_Accelerator = mongoose.model('Incubator_Accelerator', Incubator_AcceleratorSchema)

module.exports = Incubator_Accelerator
