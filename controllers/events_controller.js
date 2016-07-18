const Event = require('../models/event')
// GET
function getAll (req, res) {
  Event.find(function (err, events) {
    if (err) res.json({message: 'could not find event'})
    res.status(200).json(events)
  })
}

function getEvent (req, res) {
  let id = req.params.id

  Event.findById({_id: id}, function (err, event) {
    if (err) res.json({message: 'could not find event b/c: ' + err})

    res.json({event: event})
  })
}
// POST
function createEvent (req, res) {
  let event = new Event()

  event.name = req.body.name
  event.address = req.body.address
  event.description = req.body.description
  event.website = req.body.website
  event.logo = req.body.logo

  event.save((err, event) => {
    if (err) res.json({message: 'could not create event b/c: ' + err})

    console.log(Event.findOne({auth_token: req.query.auth_token}))
    res.send(event)
  })
}

// PUT
function updateEvent (req, res) {
  let id = req.params.id

  Event.findById({_id: id}, (err, event) => {
    if (err) res.json({message: 'could not find post b/c: ' + err})
    if (req.body.name) event.name = req.body.name
    if (req.body.address) event.address = req.body.address
    if (req.body.description) event.description = req.body.description
    if (req.body.website) event.website = req.body.website
    if (req.body.logo) event.logo = req.body.logo

    event.save((err) => {
      if (err) res.json({message: 'could not update post b/c: ' + err})
      res.json({message: 'event successfully updated'})
    })
  })
}

// DELETE
function destroyEvent (req, res) {
  let id = req.params.id

  Event.remove({_id: id}, (err) => {
    if (err) return res.json({message: 'could not delete post b/c: ' + err})
    res.json({message: 'event successfully deleted'})
  })
}

module.exports = {
  getAll: getAll,
  getEvent: getEvent,
  createEvent: createEvent,
  updateEvent: updateEvent,
  destroyEvent: destroyEvent
}
