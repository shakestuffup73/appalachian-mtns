import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema ({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
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
  comments: [commentSchema],
}, {
  timestamps: true
})

const Climb = mongoose.model('Climb', climbSchema)

export {
  Climb
}