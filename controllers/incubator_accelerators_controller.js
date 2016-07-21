const Incubator_Accelerator = require('../models/incubator_accelerator')
// GET
function getAll (req, res) {
  Incubator_Accelerator.find(function (err, incubator_accelerators) {
    if (err) res.json({message: 'could not find incubator_accelerator'})
    res.status(200).json(incubator_accelerators)
  })
}

function getIncubator_Accelerator (req, res) {
  let id = req.params.id

  Incubator_Accelerator.findById({_id: id}, function (err, incubator_accelerator) {
    if (err) res.json({message: 'could not find incubator_accelerator b/c: ' + err})
    let newObj = incubator_accelerator
    newObj.model = 'incubator-accelerators'
    res.json({incubator_accelerator: newObj})
  })
}
// POST
function createIncubator_Accelerator (req, res) {
  let incubator_accelerator = new Incubator_Accelerator()

  incubator_accelerator.name = req.body.name
  incubator_accelerator.address = req.body.address
  incubator_accelerator.description = req.body.description
  incubator_accelerator.website = req.body.website
  incubator_accelerator.logo = req.body.logo

  incubator_accelerator.save((err, incubator_accelerator) => {
    if (err) res.json({message: 'could not create incubator_accelerator b/c: ' + err})
    res.send(incubator_accelerator)
  })
}

// PUT
function updateIncubator_Accelerator (req, res) {
  let id = req.params.id

  Incubator_Accelerator.findById({_id: id}, (err, incubator_accelerator) => {
    if (err) res.json({message: 'could not find post b/c: ' + err})
    if (req.body.name) incubator_accelerator.name = req.body.name
    if (req.body.address) incubator_accelerator.address = req.body.address
    if (req.body.description) incubator_accelerator.description = req.body.description
    if (req.body.website) incubator_accelerator.website = req.body.website
    if (req.body.logo) incubator_accelerator.logo = req.body.logo

    incubator_accelerator.save((err) => {
      if (err) res.json({message: 'could not update post b/c: ' + err})
      res.json({message: 'incubator_accelerator successfully updated'})
    })
  })
}

// DELETE
function destroyIncubator_Accelerator (req, res) {
  let id = req.params.id

  Incubator_Accelerator.remove({_id: id}, (err) => {
    if (err) return res.json({message: 'could not delete post b/c: ' + err})
    res.json({message: 'incubator_accelerator successfully deleted'})
  })
}

module.exports = {
  getAll: getAll,
  getIncubator_Accelerator: getIncubator_Accelerator,
  createIncubator_Accelerator: createIncubator_Accelerator,
  updateIncubator_Accelerator: updateIncubator_Accelerator,
  destroyIncubator_Accelerator: destroyIncubator_Accelerator
}
