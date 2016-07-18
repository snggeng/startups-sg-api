// load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/cospace.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Cospace'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Cospace',
    'documents': [
      {
        'name': 'The Working Capitol',
        'address': '1 Keong Saik Rd, Singapore',
        'description': `It takes over the historic AIA building and merges five shophouses into one giant co-working space. This space is open plan with lots of light from the shuttered windows, despite the fact that it's decked out in a mandatory white washed color scheme. The co-working space also has private offices and a dedicated events venue with a pretty flexible schedule: you can book on a daily basis or have a permanent space. It's also home to a cafe, The People Vs., with a selection of coffees, teas, breads and the likes.`,
        'website': 'http://theworkingcapitol.com',
        'logo': 'twc.png'
      }
    ]
  }
]
