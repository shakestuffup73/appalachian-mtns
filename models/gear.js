import mongoose from 'mongoose'

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
  rockRack: String,
  iceRack: String,
  dryRope60m: Boolean,
  dryRope70m: Boolean,
  halfRopes: Boolean,
  iceTools: Boolean,
  crampons: Boolean,
  helmet: Boolean,
  harness: Boolean,
  otherGear: String,
  missingRock: String,
  missingIce: String,
  extraGear: Boolean,
})

const Gear = mongoose.model('Gear', gearSchema)

export {
  Gear
}