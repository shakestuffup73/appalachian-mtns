import { Climb } from '../models/climb.js'

function index (req, res) {
  Climb.find({})
  .then(climbs => {
    res.render('climbs/index', {
      title: 'All Ice Climbs',
      climbs: climbs,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/climbs')
  })
}

function newClimb(req, res) {
  console.log('newClimb function responding!')
  Climb.find({})
  .then(climbs => {
    res.render('climbs/new', {
      title: 'Add Climb',
      climbs: climbs,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/climbs/new')
  })
}

function create (req, res) {
  console.log('this is the create climb function')
  Climb.create(req.body)
  .then(climb => {
    console.log('this is the climb being created', climb)
    res.redirect('/climbs/new')
  })
  .catch (error => {
    res.redirect('/climbs/new')
  })
}

function addToList (req, res) {
  console.log('this is the add to list function!')
}



export {
  index,
  newClimb as new,
  create,
  addToList,
}

