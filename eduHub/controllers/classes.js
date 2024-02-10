const Class = require('../models/class')

const index = async (req, res) => {
  const classFilter = req._parsedOriginalUrl.pathname
  console.log('request', req._parsedOriginalUrl.pathname)
  let allClasses = await Class.find({}).populate('teacher')
  let userDetails = req.user

  if (classFilter == '/classes') {
    res.render('classes/index', {
      title: 'All Classes',
      allClasses,
      user: req.user,
      classFilter
    })
  } else {
    res.render('classes/index', {
      title: 'My Classes',
      allClasses,
      user: req.user,
      classFilter
    })
  }
}

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
    res.redirect('/classes/myclasses')
  } catch (error) {
    console.log(error)
  }
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

const deleteClass = async (req, res) => {
  const oneClass = await Class.findOne({ _id: req.params.id })
  await oneClass.deleteOne()

  res.redirect('/classes/myclasses')
}

module.exports = {
  new: newClass,
  create,
  index,
  show,
  enroll,
  delete: deleteClass
}
