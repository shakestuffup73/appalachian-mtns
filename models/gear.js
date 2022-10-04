import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gearSchema = new Schema ({
  canLead: Boolean,
  rope: String,
  meters: Number,
})

const Gear = mongoose.model('Gear', gearSchema)

export {
  Gear
}