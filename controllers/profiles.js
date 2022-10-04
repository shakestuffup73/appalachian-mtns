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
  console.log('this is the add climb to list function')

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

function deleteClimb (req, res) {
  console.log('this is the delete climb from list function')
  Profile.findById(req.params.id)
  .then (myProfile => {
    const index = myProfile.myClimbs.indexOf(req.params.climbId)
    myProfile.myClimbs.splice(index, 1)

    myProfile.save()
    .then (() => {
      res.redirect(`/profiles/${req.params.id}`)
    })
  })
}

function addPartnerToList(req, res) {
  console.log('this is the add partner function!')

  Profile.findById(req.user.profile._id)
  .populate('myPartners')
  .then (profile => {

    console.log('this is req.body', req.body)
    profile.myPartners.push(req.body.id)

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

function deletePartner(req, res) {
  console.log('this is the delete partner function!')
  Profile.findById(req.params.id)
  .then (myProfile => {
    const index = myProfile.myPartners.indexOf(req.params.partnerId)
    myProfile.myPartners.splice(index, 1)

    myProfile.save()
    .then (() => {
      res.redirect(`/profiles/${req.params.id}`)
    })
  })
}


export {
  index,
  show,
  addClimbToList,
  addPartnerToList,
  deleteClimb,
  deletePartner,
}
