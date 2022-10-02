import mongoose from 'mongoose'
import { Climb } from '../models/climb.js'

const Schema = mongoose.Schema


const profileSchema = new Schema({
  name: String,
  avatar: String,
  iceClimbed: [{ type: Schema.Types.ObjectId, ref: 'Climb'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}