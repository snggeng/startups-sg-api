const express = require('express')
const router = express.Router()

const cospaceController = require('../controllers/cospaces_controller')

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

module.exports = router
