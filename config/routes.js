const express = require('express')
const router = express.Router()

const cospaceController = require('../controllers/cospaces_controller')
const eventController = require('../controllers/events_controller')
const government_programController = require('../controllers/government_programs_controller')
const investorController = require('../controllers/investors_controller')

// Allow cross-domain ajax requests
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.get('/', function (req, res, next) {
  console.log('hello')
  res.json({message: 'Hello'})
})
// router.route('/co-working-spaces', cospaceController.getAll)
router.route('/co-working-spaces')
  // '/cospaces' GET
  .get(cospaceController.getAll)
  .post(cospaceController.createCoSpace)

router.route('/co-working-spaces/:id')
  // 'cospaces/:id' GET
  .get(cospaceController.getCoSpace)
  // '/cospaces/:id' PUT
  .put(cospaceController.updateCoSpace)
  // '/cospaces/:id' DELETE
  .delete(cospaceController.destroyCoSpace)

  // router.route('/events', eventController.getAll)
router.route('/events')
  // '/events' GET
  .get(eventController.getAll)
  .post(eventController.createEvent)

router.route('/events/:id')
  // 'events/:id' GET
  .get(eventController.getEvent)
  // '/events/:id' PUT
  .put(eventController.updateEvent)
  // '/events/:id' DELETE
  .delete(eventController.destroyEvent)

  // router.route('/government_programs', government_programController.getAll)
router.route('/government-programs')
  // '/government_programs' GET
  .get(government_programController.getAll)
  .post(government_programController.createGovernment_Program)

router.route('/government-programs/:id')
  // 'government_programs/:id' GET
  .get(government_programController.getGovernment_Program)
  // '/government_programs/:id' PUT
  .put(government_programController.updateGovernment_Program)
  // '/government_programs/:id' DELETE
  .delete(government_programController.destroyGovernment_Program)

  // router.route('/investors', investorController.getAll)
router.route('/investors')
  // '/investors' GET
  .get(investorController.getAll)
  .post(investorController.createInvestor)

router.route('/investors/:id')
  // 'investors/:id' GET
  .get(investorController.getInvestor)
  // '/investors/:id' PUT
  .put(investorController.updateInvestor)
  // '/investors/:id' DELETE
  .delete(investorController.destroyInvestor)

module.exports = router
