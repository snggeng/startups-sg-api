const Government_Program = require('../models/government_program')
// GET
function getAll (req, res) {
  Government_Program.find(function (err, government_programs) {
    if (err) res.json({message: 'could not find government_program'})
    res.status(200).json(government_programs)
  })
}

function getGovernment_Program (req, res) {
  let id = req.params.id

  Government_Program.findById({_id: id}, function (err, government_program) {
    if (err) res.json({message: 'could not find government_program b/c: ' + err})

    res.json({government_program: government_program})
  })
}
// POST
function createGovernment_Program (req, res) {
  let government_program = new Government_Program()

  government_program.name = req.body.name
  government_program.address = req.body.address
  government_program.description = req.body.description
  government_program.website = req.body.website
  government_program.logo = req.body.logo

  government_program.save((err, government_program) => {
    if (err) res.json({message: 'could not create government_program b/c: ' + err})

    console.log(Government_Program.findOne({auth_token: req.query.auth_token}))
    res.send(government_program)
  })
}

// PUT
function updateGovernment_Program (req, res) {
  let id = req.params.id

  Government_Program.findById({_id: id}, (err, government_program) => {
    if (err) res.json({message: 'could not find post b/c: ' + err})
    if (req.body.name) government_program.name = req.body.name
    if (req.body.address) government_program.address = req.body.address
    if (req.body.description) government_program.description = req.body.description
    if (req.body.website) government_program.website = req.body.website
    if (req.body.logo) government_program.logo = req.body.logo

    government_program.save((err) => {
      if (err) res.json({message: 'could not update post b/c: ' + err})
      res.json({message: 'government_program successfully updated'})
    })
  })
}

// DELETE
function destroyGovernment_Program (req, res) {
  let id = req.params.id

  Government_Program.remove({_id: id}, (err) => {
    if (err) return res.json({message: 'could not delete post b/c: ' + err})
    res.json({message: 'government_program successfully deleted'})
  })
}

module.exports = {
  getAll: getAll,
  getGovernment_Program: getGovernment_Program,
  createGovernment_Program: createGovernment_Program,
  updateGovernment_Program: updateGovernment_Program,
  destroyGovernment_Program: destroyGovernment_Program
}
