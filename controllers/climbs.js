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

  const newClimb = new Climb()
  const date = newClimb.date
  const dateClimbed = date.toISOString().slice(0, 8)
  
  req.body.owner = req.user.profile
  Climb.find({})
  .then(climbs => {
    res.render('climbs/new', {
      title: 'Add Climb',
      dateClimbed,
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
  req.body.elevation = req.body.elevation.replaceAll(',', '')
  Climb.create(req.body)
  .then(climb => {
    res.redirect('/climbs')
  })
  .catch (error => {
    res.redirect('/climbs/new')
  })
}

function show (req, res) {
  Climb.findById(req.params.id)
  .populate({ 
    path: 'reviews', 
    select: 'reviewer',
    populate: {
      path: 'reviewer',
      select: 'name'
    }
  })
  .then (climb => {
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
  req.body.reviewer = req.user.profile._id
  console.log(req.body)
  Climb.findById(req.params.id)  
  .then (climb => {
    climb.reviews.push(req.body)
    climb.save()
    .then(() => {
      res.redirect(`/climbs/${climb._id}`)  
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteReview (req, res) {
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

function editReview (req, res) {
  Climb.findById(req.params.climbId)
  .then (climb => {
    const thisReview = climb.reviews.id(req.params.reviewId)
    res.render('climbs/edit', {
      review: thisReview,
      climb,
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect('/')
  })
}

function updateReview (req, res) {
  Climb.findById(req.params.climbId)
  .then (climb => {
    const review = climb.reviews.id(req.params.reviewId)
    review.content = req.body.content
    climb.save()
    .then (() => {
      res.redirect(`/climbs/${climb._id}`)
    })
  })
}


export {
  index,
  newClimb as new,
  create,
  show,
  createReview,
  deleteReview,
  editReview,
  updateReview,
}