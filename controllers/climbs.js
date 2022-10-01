import { Climb } from '../models/climb.js'
import { Profile } from '../models/profile.js'

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
  req.body.owner = req.user.profile
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
  req.body.owner = req.user.profile._id
  console.log('this is req.body', req.body)
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

function show (req, res) {
  console.log('this is the climb details show function!')
  Climb.findById(req.params.id)
  .populate({path: 'reviews', select: 'reviewer'})
  .then (climb => {
    console.log('Climb data:', climb)
    res.render('climbs/show', {
      title: 'Climb Details',
      climb: climb,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function createReview (req, res) {
  console.log('this is the create review function!')
  console.log(req.body)
  Climb.findById(req.params.id)
  .then (climb => {
    climb.reviews.push(req.body)
    climb.save()
    .then(() => {
      res.redirect(`/climbs/${climb._id}`)  
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteReview (req, res) {
  console.log('This is the delete review function!')
  Climb.findById(req.params.climbId)
  .then (climb => {
    climb.reviews.id(req.params.reviewId).remove()
    climb.save()
    .then(() => {
      res.redirect(`/climbs/${climb._id}`)
    })
    .catch (error => {
      console.log(error)
      res.redirect('/')
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newClimb as new,
  create,
  show,
  createReview,
  deleteReview as delete,
}

