const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,
    onboarding: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ['teacher', 'student'],
      default: 'student'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
