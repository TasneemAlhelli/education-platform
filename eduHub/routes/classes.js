const express = require('express')
const router = express.Router()

const classesCtrl = require('../controllers/classes')

//get /
router.get('/', classesCtrl.index)
//get /classes/new
router.get('/new', classesCtrl.new)
//post /classes
router.post('/new', classesCtrl.create)
// get /classes/:id
router.get('/:id', classesCtrl.show)

module.exports = router
