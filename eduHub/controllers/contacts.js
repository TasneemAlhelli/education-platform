const User = require('../models/user')
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '3d09d138649a78',
    pass: '1dece6e876c553'
  }
})

const index = async (req, res) => {
  let teachersName = await User.find({ role: 'teacher' })

  res.render('contact', { title: 'Contact us', teachersName })
}

const send = (req, res) => {
  console.log('send')
  const message = {
    from: req.body.name,
    to: req.body.teacher,
    subject: req.body.subject,
    text: req.body.description
  }
  transport.sendMail(message, function (err, info) {
    if (err) {
      res.redirect('/contact')
      console.log(err)
    } else {
      res.redirect('/')
      console.log(info)
    }
  })
}

module.exports = {
  index,
  send
}
