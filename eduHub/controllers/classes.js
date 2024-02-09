const Class = require('../models/class')

const newClass = (req, res) => {
  if (req.user.role == 'teacher') {
    res.render('classes/new', { title: 'Create Class' })
  } else {
    res.redirect('/classes')
  }
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

  const userDetails = req.user

  res.render('classes/index', {
    title: 'All Classes',
    allClasses,
    userDetails
  })
}

const show = async (req, res) => {
  res.render('classes/show', { title: 'show page' })
}

const enroll = async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id)
    classItem.student.push(req.user._id)
    await classItem.save()

    res.render('classes/show', { title: 'show page' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  new: newClass,
  create,
  index,
  show,
  enroll
}
