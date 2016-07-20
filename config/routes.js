const express = require('express')
const router = express.Router()

const cospaceController = require('../controllers/cospaces_controller')
const eventController = require('../controllers/events_controller')
const government_programController = require('../controllers/government_programs_controller')
const incubator_acceleratorController = require('../controllers/incubator_accelerators_controller')
const investorController = require('../controllers/investors_controller')
const userController = require('../controllers/users_controller')
const AuthController = require('../controllers/auth_controller')

// Allow cross-domain ajax requests
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, User-Email, Auth-Token')
  res.methods('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
  next()
})

router.get('/', function (req, res, next) {
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

  // router.route('/government-programs', government_programController.getAll)
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

  // router.route('/incubator-accelerators', incubator_acceleratorController.getAll)
router.route('/incubator-accelerators')
  // '/incubator_accelerators' GET
  .get(incubator_acceleratorController.getAll)
  .post(incubator_acceleratorController.createIncubator_Accelerator)

router.route('/incubator-accelerators/:id')
  // 'incubator_accelerators/:id' GET
  .get(incubator_acceleratorController.getIncubator_Accelerator)
  // '/incubator_accelerators/:id' PUT
  .put(incubator_acceleratorController.updateIncubator_Accelerator)
  // '/incubator_accelerators/:id' DELETE
  .delete(incubator_acceleratorController.destroyIncubator_Accelerator)

router.get('/users', userController.getAll)
router.get('/users/:id', userController.getUser)

router.post('/signup', AuthController.signUp)
router.post('/signin', AuthController.signIn)

module.exports = router
