import mongoose from 'mongoose'
import { Climb } from '../models/climb.js'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  myPartners: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  myClimbs: [{type: Schema.Types.ObjectId, ref: "Climb"}],
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

