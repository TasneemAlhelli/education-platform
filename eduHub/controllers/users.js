const User = require('../models/user')
const Class = require('../models/class')
const update = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    // update user role
    user.role = req.body.role
    user.onboarding = true
    await user.save()

    // redirect to home page
    res.redirect('/')
  } catch (err) {
    console.log(err)
  }
}

const enroll = async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.classId)
    classItem.student.push(req.user._id)
    await classItem.save()
    res.render('classes/show', { title: 'Classes', classItem, enrolled: true })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  update,
  enroll
}
