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


export {
  index,
  show,
}