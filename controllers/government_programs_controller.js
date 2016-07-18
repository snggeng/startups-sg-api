const Goverment_Program = require('../models/government_program')
// GET
function getAll (req, res) {
  Goverment_Program.find(function (err, government_programs) {
    if (err) res.json({message: 'could not find government_program'})
    res.status(200).json(government_programs)
  })
}

function getGoverment_Program (req, res) {
  let id = req.params.id

  Goverment_Program.findById({_id: id}, function (err, government_program) {
    if (err) res.json({message: 'could not find government_program b/c: ' + err})

    res.json({government_program: government_program})
  })
}
// POST
function createGoverment_Program (req, res) {
  let government_program = new Goverment_Program()

  government_program.name = req.body.name
  government_program.address = req.body.address
  government_program.description = req.body.description
  government_program.website = req.body.website
  government_program.logo = req.body.logo

  government_program.save((err, government_program) => {
    if (err) res.json({message: 'could not create government_program b/c: ' + err})

    console.log(Goverment_Program.findOne({auth_token: req.query.auth_token}))
    res.send(government_program)
  })
}

// PUT
function updateGoverment_Program (req, res) {
  let id = req.params.id

  Goverment_Program.findById({_id: id}, (err, government_program) => {
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
function destroyGoverment_Program (req, res) {
  let id = req.params.id

  Goverment_Program.remove({_id: id}, (err) => {
    if (err) return res.json({message: 'could not delete post b/c: ' + err})
    res.json({message: 'government_program successfully deleted'})
  })
}

module.exports = {
  getAll: getAll,
  getGoverment_Program: getGoverment_Program,
  createGoverment_Program: createGoverment_Program,
  updateGoverment_Program: updateGoverment_Program,
  destroyGoverment_Program: destroyGoverment_Program
}
