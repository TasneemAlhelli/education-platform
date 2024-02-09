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
  let studentRole = ''
  if (req.user.role == 'student') {
    studentRole = 'student'
  }
  res.render('classes/index', { title: 'All Classes', allClasses, studentRole })
}

const show = async (req, res) => {
  console.log(req.body)

  if (req.body.studentRole == 'student') {
    const classItem = await Class.findById(req.params.id)
    classItem.student.push(req.body.user._id)
    await classItem.save()
  }
  res.render('classes/show', { title: 'show page' })
}

module.exports = {
  new: newClass,
  create,
  index,
  show
}
