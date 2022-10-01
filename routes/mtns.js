import { Router } from 'express'
import * as mtnsCtrl from '../controllers/mtns.js'

const router = Router()

/* GET mtns listing. */
router.get('/', isLoggedIn, mtnsCtrl.index)
router.get('/new', isLoggedIn, mtnsCtrl.new)

/* POST mtns */
router.post('/', mtnsCtrl.create)
router.post('/', mtnsCtrl.addToList)


function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}


export {
  router
}
