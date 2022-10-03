import { Profile } from '../models/profile.js'
import { Climb } from '../models/climb.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "All Climbers"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show (req, res) {
  console.log('this is the show profile function!')
  Profile.findById(req.params.id)
  .then(profile => {
    Climb.find({})
    .populate('name')
    .then (climbs => {
      const isSelf = profile._id.equals(req.user.profile._id)
      res.render('profiles/show', {
        isSelf,
        profile,
        climbs,
      })
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/profiles')
  })
}

function addToList (req, res) {
  console.log('this is the add to list function')

  Profile.findById(req.params.id)
  .then (profile => {
    profile.myClimbs.push(req.body.climbId)
    console.log('this is req.body.climbId', req.body.climbId)
    console.log('this is profile.myClimbs', profile.myClimbs)
    profile.save()
    .then (() => {
      res.redirect(`/profiles/${profile._id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect(`/profiles/${profile._id}`)
    })
  })
}

export {
  index,
  show,
  addToList,
}