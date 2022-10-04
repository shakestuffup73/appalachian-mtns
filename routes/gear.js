import { Router } from 'express'
import * as gearCtrl from '../controllers/gear.js'

const router = Router()

router.get('/', gearCtrl.index)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  router
}