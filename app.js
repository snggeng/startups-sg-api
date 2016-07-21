// load in the environment vars
require('dotenv').config({silent: true})

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./config/routes')
const bodyParser = require('body-parser')
const CoSpace = require('./models/cospace.js')

// MIDDLEWARE
// plugin morgan for debugging information
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// ROUTES
// keep all api routes in a seperate file - prefix routes with api/ path
app.use('/', router)

// server everything in assets folder as static for images etc
app.use(express.static('public'))

// ERRORS
// catch 404 and pass on to error handlers
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Handle Errors in development
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// Handle errors in production with less information logged
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}`)
})

// CONNECT TO DB
mongoose.connect(process.env.MONGODB_URI)

// var Db = require('mongodb').Db
// var Server = require('mongodb').Server
var algoliasearch = require('algoliasearch')

// init Algolia index
var client = algoliasearch(process.env.ALGOLIA, process.env.ALGOLIA_API)
console.log(process.env.ALGOLIA, process.env.ALGOLIA_API)
var index = client.initIndex('startup_index')

CoSpace.find().lean().exec((err, cospaces) => {
  if (err) console.log(err)
  cospaces = cospaces.map(function (result) {
    result.objectID = result._id
    console.log(result)
    return result
  })
  index.addObjects(cospaces, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('MySQL<>Algolia import done')
  }
)
})

// init connection to MongoDB
// var db = new Db('startups-api', new Server(process.env.MONGODB_URI, 27017))
// db.open(function (err, db) {
//   if (err) console.log(err)
//   // get the collection
//   db.collection('cospaces', function (err, collection) {
//     if (err) console.log(err)
//     // iterate over the whole collection using a cursor
//     var batch = []
//     collection.find().forEach(function (doc) {
//       batch.push(doc)
//       if (batch.length > 10000) {
//         // send documents by batch of 10000 to Algolia
//         index.addObjects(batch)
//         batch = []
//       }
//     })
//     // last batch
//     if (batch.length > 0) {
//       index.addObjects(batch)
//     }
//   })
// })
