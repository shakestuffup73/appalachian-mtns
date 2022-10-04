import { Climb } from '../models/climb.js'
import { Gear } from '../models/gear.js'

function index (req, res) {
  Gear.find({})
  .then(gear => {
    res.render('gear/index', {
      title: 'Ice Gear',
      gear,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/gear')
  })
}


export {
  index,
}