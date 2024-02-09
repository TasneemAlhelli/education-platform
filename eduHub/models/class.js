const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  student: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('Class', classSchema)
