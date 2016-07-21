const CoSpace = require('../models/cospace')
// GET
function getAll (req, res) {
  CoSpace.find(function (err, cospaces) {
    if (err) res.json({message: 'could not find cospace'})
    res.status(200).json(cospaces)
  })
}

function getCoSpace (req, res) {
  let id = req.params.id

  CoSpace.findById({_id: id}, function (err, cospace) {
    if (err) res.json({message: 'could not find cospace b/c: ' + err})
    let newObj = cospace
    newObj.model = 'co-working-spaces'
    console.log(newObj)
    res.json({cospace: newObj})
  })
}
// POST
function createCoSpace (req, res) {
  let cospace = new CoSpace()

  cospace.name = req.body.name
  cospace.address = req.body.address
  cospace.description = req.body.description
  cospace.website = req.body.website
  cospace.logo = req.body.logo

  cospace.save((err, cospace) => {
    if (err) res.json({message: 'could not create cospace b/c: ' + err})
    res.send(cospace)
  })
}

// PUT
function updateCoSpace (req, res) {
  let id = req.params.id

  CoSpace.findById({_id: id}, (err, cospace) => {
    if (err) res.json({message: 'could not find post b/c: ' + err})
    if (req.body.name) cospace.name = req.body.name
    if (req.body.address) cospace.address = req.body.address
    if (req.body.description) cospace.description = req.body.description
    if (req.body.website) cospace.website = req.body.website
    if (req.body.logo) cospace.logo = req.body.logo

    cospace.save((err) => {
      if (err) res.json({message: 'could not update post b/c: ' + err})
      res.json({message: 'cospace successfully updated'})
    })
  })
}

// DELETE
function destroyCoSpace (req, res) {
  let id = req.params.id
  CoSpace.findById({_id: id}, (err, cospace) => {
    if (err) return res.json({message: 'could not find post b/c: ' + err})
    cospace.remove((err) => {
      if (err) return res.json({message: 'could not delete post b/c: ' + err})
      res.json({message: 'cospace successfully deleted'})
    })
  })
}

module.exports = {
  getAll: getAll,
  getCoSpace: getCoSpace,
  createCoSpace: createCoSpace,
  updateCoSpace: updateCoSpace,
  destroyCoSpace: destroyCoSpace
}
