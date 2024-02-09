const Class = require('../models/class')

const newClass = (req, res) => {
  res.render('classes/new', { title: 'Create Class' })
}

const create = async (req, res) => {
  req.body.teacher = req.user._id
  try {
    await Class.create(req.body)
    res.redirect('/classes/new')
  } catch (error) {
    console.log(error)
  }
}

const index = async (req, res) => {
  const allClasses = await Class.find({})
  res.render('classes/index', { title: 'All Classes', allClasses })
}

module.exports = {
  new: newClass,
  create,
  index
}
