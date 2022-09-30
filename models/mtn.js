import mongoose from 'mongoose'

const Schema = mongoose.Schema


const mtnSchema = new Schema({
  name: String,
  elevation: Number,
  completed: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Mtn = mongoose.model('Mtn', mtnSchema)

export {
  Mtn
}