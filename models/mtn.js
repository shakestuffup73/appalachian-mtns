import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema ({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true,
})

const mtnSchema = new Schema({
  name: String,
  date: Date,
  elevation: Number,
  comments: [commentSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Mtn = mongoose.model('Mtn', mtnSchema)

export {
  Mtn
}