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
  .populate('myClimbs')
  .populate('myPartners')
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      isSelf,
      profile,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/profiles')
  })
}

function addClimbToList (req, res) {
  console.log('this is the add to list function')

  Profile.findById(req.user.profile._id)
  .populate('myClimbs')
  .then (profile => {

    console.log('this is req.body', req.body)
    profile.myClimbs.push(req.body.id)

    profile.save()
    .then (() => {
      res.redirect(`/profiles/${req.params.id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect(`/profiles/${req.params.id}`)
    })
  })
}

function addPartnerToList(req, res) {

}



export {
  index,
  show,
  addClimbToList,
  addPartnerToList,
}