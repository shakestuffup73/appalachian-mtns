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
  Profile.findById(req.user.profile._id)
  .populate('myClimbs')
  .then (profile => {
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
  Profile.findById(req.user.profile._id)
  .populate('myPartners')
  .then (profile => {
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

function addGearList (req, res) {
  Profile.findById(req.user.profile._id)
  .then (myProfile => {
    for (const prop in req.body) {
      req.body[prop]=!!req.body[prop]
    }
    myProfile.myGearSkills.push(req.body)
    myProfile.save()
    .then (() => {
      res.redirect(`/profiles/${req.params.id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect(`/profiles/${req.params.id}`)
    })
  })
}

function deleteGearSkill(req, res) {
  Profile.findById(req.params.id)
  .then (myProfile => {
    const index = myProfile.myGearSkills.indexOf(req.params.gearSkillId)
    myProfile.myGearSkills.splice(index, 1)
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
  addGearList,
  deleteGearSkill,
}
