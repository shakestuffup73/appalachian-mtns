import { Router } from 'express'
import * as climbsCtrl from '../controllers/climbs.js'

const router = Router()

/* GET climbs listing. */
router.get('/', isLoggedIn, climbsCtrl.index)
router.get('/new', isLoggedIn, climbsCtrl.new)
router.get('/:id', isLoggedIn, climbsCtrl.show)

/* POST climbs */
router.post('/', climbsCtrl.create)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}


export {
  router
}
