const express = require('express')
const router = express.Router()

const classesCtrl = require('../controllers/classes')

//get /classes
router.get('/', classesCtrl.index)
//only specific classes
//get /classes
router.get('/myclasses', classesCtrl.index)

//get /classes/new
router.get('/new', classesCtrl.new)
//post /classes
router.post('/myclasses', classesCtrl.create)
// get /classes/:id
router.get('/:id', classesCtrl.show)
//post /classes/:id
router.post('/:id', classesCtrl.enroll)
//delete /classes/:id
router.delete('/myclasses/:id', classesCtrl.delete)

module.exports = router
