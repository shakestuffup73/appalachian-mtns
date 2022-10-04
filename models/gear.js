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
  dryRope60m: Boolean,
  dryRope70m: Boolean,
  halfRopes: Boolean,
  iceTools: Boolean,
  crampons: Boolean,
  helmet: Boolean,
  harness: Boolean,
  extraGear: Boolean,
})

const Gear = mongoose.model('Gear', gearSchema)

export {
  Gear
}