// load in the environment vars
require('dotenv').config({silent: true})

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./config/routes')
const bodyParser = require('body-parser')
const CoSpace = require('./models/cospace.js')
const Gov = require('./models/government_program.js')
const Inc = require('./models/incubator_accelerator.js')
const Investor = require('./models/investor.js')
const algoliasearch = require('algoliasearch')

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

// init Algolia index
var client = algoliasearch(process.env.ALGOLIA, process.env.ALGOLIA_API)
var index = client.initIndex('startup_index')

CoSpace.find().lean().exec((err, cospaces) => {
  if (err) console.log(err)
  cospaces = cospaces.map(function (result) {
    result.model = 'co-working-spaces'
    result.objectID = result._id
    return result
  })
  index.addObjects(cospaces, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Algolia import done')
  }
)
})

Gov.find().lean().exec((err, govs) => {
  if (err) console.log(err)
  govs = govs.map(function (result) {
    result.model = 'government-programs'
    result.objectID = result._id
    return result
  })
  index.addObjects(govs, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Algolia import done')
  }
)
})

Inc.find().lean().exec((err, incs) => {
  if (err) console.log(err)
  incs = incs.map(function (result) {
    result.model = 'incubator-accelerators'
    result.objectID = result._id
    return result
  })
  index.addObjects(incs, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Algolia import done')
  }
)
})

Investor.find().lean().exec((err, investors) => {
  if (err) console.log(err)
  investors = investors.map(function (result) {
    result.model = 'investors'
    result.objectID = result._id
    return result
  })
  index.addObjects(investors, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Algolia import done')
  }
)
})
