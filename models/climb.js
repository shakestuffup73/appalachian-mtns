import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  reviewer: { type: Schema.Types.ObjectId, ref: "Profile" },
}, {
  timestamps: true,
})

const climbSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: oneYearAgo(),
    required: true
  },
  location: {
    type: String,
    required: true
  },
  elevation: Number,
  grade: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  reviews: [reviewSchema],
}, {
  timestamps: true
})


function oneYearAgo(){
  const today = new Date()
  today.setFullYear(today.getFullYear() - 1)
  return today
}
oneYearAgo();


const Climb = mongoose.model('Climb', climbSchema)

export {
  Climb
}