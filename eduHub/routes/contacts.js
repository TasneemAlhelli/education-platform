const express = require('express')
const router = express.Router()

const contactsCtrl = require('../controllers/contacts')

router.get('/', contactsCtrl.index)

router.post('/', contactsCtrl.send)

module.exports = router
