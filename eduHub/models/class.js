const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema for posts embedded in the class schema
const classPosts = new Schema({
  message: {type: String},
  heading: {type: String},
});

const classSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  grade: {
    type: String,
    enum: ['Primary', 'Intermediate', 'Secondary']
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  posts: [classPosts],
  students: {type: [Schema.Types.ObjectId]}
})

module.exports = mongoose.model('Class', classSchema)
