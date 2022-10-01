import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  content: String,
  reviewer: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true,
})

const climbSchema = new Schema({
  name: String,
  date: Date,
  location: String,
  elevation: Number,
  grade: {
    type: String,
    match: /[WI][1-6]\d?/
  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  reviews: [reviewSchema],
}, {
  timestamps: true
})

const Climb = mongoose.model('Climb', climbSchema)

export {
  Climb
}