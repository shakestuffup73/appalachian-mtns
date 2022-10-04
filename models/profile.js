import mongoose from 'mongoose'
import { Climb } from '../models/climb.js'
import { Gear } from '../models/gear.js'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  myGearSkills: [{type: Schema.Types.ObjectId, ref: "Gear"}],
  myPartners: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  myClimbs: [{type: Schema.Types.ObjectId, ref: "Climb"}],
  name: String,
  avatar: String,
  canLead: Boolean,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

