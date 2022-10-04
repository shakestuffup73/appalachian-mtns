import { Gear } from '../models/gear.js'

function index (req, res) {
  Gear.find({})
  .then (gear => res.json(gear))
  .catch (error => {
    console.log(error)
    res.json(error)
  })
}

export {
  index,
}