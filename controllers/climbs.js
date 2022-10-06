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
  console.log('this is req.body', req.body)
  console.log('this is the create climb function')
  Climb.create(req.body)
  .then(climb => {
    console.log('this is the climb being created', climb)
    res.redirect('/climbs')
  })
  .catch (error => {
    res.redirect('/climbs/new')
  })
}

function show (req, res) {
  console.log('this is the climb details show function!')
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
  req.body.reviewer = req.user.profile._id
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

function editReview (req, res) {
  console.log('this is the edit review function')
  Climb.findById(req.params.climbId)
  .then (climb => {
    const thisReview = climb.reviews.id(req.params.reviewId)
    // console.log('this is the review to edit:', thisReview)
    // console.log('this is the reviewer:', thisReview.reviewer)
    // console.log('this is the current user:', req.user.profile._id )
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