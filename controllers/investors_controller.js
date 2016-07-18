const Investor = require('../models/investor')
// GET
function getAll (req, res) {
  Investor.find(function (err, investors) {
    if (err) res.json({message: 'could not find investor'})
    res.status(200).json(investors)
  })
}

function getInvestor (req, res) {
  let id = req.params.id

  Investor.findById({_id: id}, function (err, investor) {
    if (err) res.json({message: 'could not find investor b/c: ' + err})

    res.json({investor: investor})
  })
}
// POST
function createInvestor (req, res) {
  let investor = new Investor()

  investor.name = req.body.name
  investor.address = req.body.address
  investor.description = req.body.description
  investor.website = req.body.website
  investor.logo = req.body.logo

  investor.save((err, investor) => {
    if (err) res.json({message: 'could not create investor b/c: ' + err})

    console.log(Investor.findOne({auth_token: req.query.auth_token}))
    res.send(investor)
  })
}

// PUT
function updateInvestor (req, res) {
  let id = req.params.id

  Investor.findById({_id: id}, (err, investor) => {
    if (err) res.json({message: 'could not find post b/c: ' + err})
    if (req.body.name) investor.name = req.body.name
    if (req.body.address) investor.address = req.body.address
    if (req.body.description) investor.description = req.body.description
    if (req.body.website) investor.website = req.body.website
    if (req.body.logo) investor.logo = req.body.logo

    investor.save((err) => {
      if (err) res.json({message: 'could not update post b/c: ' + err})
      res.json({message: 'investor successfully updated'})
    })
  })
}

// DELETE
function destroyInvestor (req, res) {
  let id = req.params.id

  Investor.remove({_id: id}, (err) => {
    if (err) return res.json({message: 'could not delete post b/c: ' + err})
    res.json({message: 'investor successfully deleted'})
  })
}

module.exports = {
  getAll: getAll,
  getInvestor: getInvestor,
  createInvestor: createInvestor,
  updateInvestor: updateInvestor,
  destroyInvestor: destroyInvestor
}
