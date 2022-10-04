import mongoose from 'mongoose'
import { Climb } from '../models/climb.js'
import { Gear } from '../models/gear.js'

const Schema = mongoose.Schema

const gearSchema = new Schema ({
  leadOnIce: Boolean,
  leadMixed: Boolean,
  cleanOnIce: Boolean,
  cleanOnRock: Boolean,
  topRopeOnIce: Boolean,
  topRopeOnRock: Boolean,
  fullIceRack: Boolean,
  fullRockRack: Boolean,
  dryRope60m: Boolean,
  dryRope70m: Boolean,
  halfRopes: Boolean,
  iceTools: Boolean,
  crampons: Boolean,
  helmet: Boolean,
  harness: Boolean,
  extraGear: Boolean,
})

const profileSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  myGearSkills: [gearSchema],
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

