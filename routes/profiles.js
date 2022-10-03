import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.patch('/:id/addClimb', isLoggedIn, profilesCtrl.addClimbToList)
router.patch('/:id/addPartner', isLoggedIn, profilesCtrl.addPartnerToList)

router.delete('/:id/deletePartner', isLoggedIn, profilesCtrl.deletePartner)


export {
  router
}