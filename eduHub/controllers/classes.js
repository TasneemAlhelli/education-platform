const Class = require('../models/class')
const Review = require('../models/review')

const index = async (req, res) => {
  const classReviews = await Review.aggregate([
    {
      $group: {
        _id: '$class',
        avgRating: { $avg: '$rating' }
      }
    }
  ])

  const classFilter = req._parsedOriginalUrl.pathname
  let allClasses = await Class.find({})
    .populate('teacher')
    .sort({ createdAt: -1 })

  if (classFilter == '/classes') {
    res.render('classes/index', {
      title: 'All Classes',
      allClasses,
      user: req.user,
      classFilter,
      classReviews
    })
  } else if (classFilter == '/classes/myclasses' && req.user) {
    res.render('classes/index', {
      title: 'My Classes',
      allClasses,
      user: req.user,
      classFilter,
      classReviews
    })
  } else {
    res.redirect('/classes')
  }
}

const show = async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id).populate([
      'teacher',
      'student'
    ])

    // check if enrolled student
    let enrolled = false
    if (
      req.user &&
      req.user.role === 'student' &&
      classItem.student.length > 0
    ) {
      let counter = 0
      while (!enrolled) {
        if (classItem.student[counter].id == req.user._id) {
          enrolled = true
        }
        counter++
      }
    }

    res.render('classes/show', {
      title: `Class - ${classItem.name}`,
      classItem,
      enrolled
    })
  } catch (err) {
    console.log(err)
    res.redirect('/classes', { title: 'All Classes' })
  }
}

const newClass = (req, res) => {
  if (req.user && req.user.role == 'teacher') {
    res.render('classes/new', { title: 'Create Class' })
  } else {
    res.redirect('/classes')
  }
}

const create = async (req, res) => {
  req.body.teacher = req.user._id

  const { image } = req.files
  req.body.image = image.name
  image.mv('public/images/' + image.name)

  try {
    await Class.create(req.body)
    res.redirect('/classes/myclasses')
  } catch (error) {
    console.log(error)
    res.redirect('/classes/myclasses')
  }
}

const editClass = async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id)
    if (req.user && req.user._id.equals(classItem.teacher._id)) {
      res.render('classes/edit', { title: 'Update Class', classItem })
    } else {
      res.redirect(`/classes`)
    }
  } catch (err) {
    console.log(err)
    res.redirect(`/classes/myclasses`)
  }
}

const update = async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id)

    const image = req.files ? req.files.image : null
    if (image) {
      req.body.image = image.name
      image.mv('public/images/' + image.name)
    } else {
      req.body.image = classItem.image
    }
    
    await classItem.updateOne(req.body)
    res.redirect('/classes/myclasses')
  } catch (err) {
    console.log(err)
    res.redirect('/classes/myclasses')
  }
}

const deleteClass = async (req, res) => {
  try {
    const oneClass = await Class.findOne({ _id: req.params.id })
    await oneClass.deleteOne()
    res.redirect('/classes/myclasses')
  } catch (error) {
    console.log(error)
    res.redirect('/classes/myclasses')
  }
}

module.exports = {
  new: newClass,
  create,
  index,
  show,
  edit: editClass,
  update,
  delete: deleteClass
}
