var express = require('express')
var router = express.Router()
const passport = require('passport')
const ClassModel = require('../models/class')

/* GET home page. */
router.get('/', async function (req, res, next) {
  if (req.user && !req.user.onboarding) {
    res.render('onboarding', { title: 'Onboarding', user: req.user })
  } else {
    const featuredClasses = await ClassModel.aggregate([
      {
        $project: {
          _id: 1,
          name: 1,
          image: 1,
          studentCount: { $size: '$student' }
        }
      },
      { $sort: { studentCount: -1 } },
      { $limit: 3 }
    ])

    res.render('index', { title: 'Express', featuredClasses })
  }
})

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

module.exports = router
