import { Mtn } from '../models/mtn.js'

function index (req, res) {
  Mtn.find({})
  .then(mtns => {
    res.render('mtns', {
      title: 'All Mountains',
      mtns: mtns,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/mtns')
  })
}

function newMtn(req, res) {
  console.log('newMtn function responding!')
  Mtn.find({})
  .then(mtns => {
    res.render('mtns/new', {
      title: 'Add Mountain',
      mtns: mtns,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/mtns/new')
  })
}

function create (req, res) {
  console.log('this is the create mountain function')
  Mtn.create(req.body)
  .then(mtn => {
    console.log('this is the mountain being created', mtn)
    res.redirect('/mtns/new')
  })
  .catch (error => {
    res.redirect('/mtns/new')
  })
}

function addToList (req, res) {
  console.log('this is the add to list function!')
}



export {
  index,
  newMtn as new,
  create,
  addToList,
}

