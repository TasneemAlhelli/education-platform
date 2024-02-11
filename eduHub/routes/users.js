var express = require('express')
var router = express.Router()
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/:classId/enroll', usersCtrl.enroll)

router.post('/:id', usersCtrl.update)

module.exports = router
