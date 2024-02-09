const User = require('../models/user')

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

module.exports = {
  update
}
