const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema for posts embedded in the class schema
const classPosts = new Schema({
  message: {type: String},
  heading: {type: String},
}, {
  timestamps: true
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
  student: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  posts: [classPosts],
}, {
  timestamps: true
})

module.exports = mongoose.model('Class', classSchema)
