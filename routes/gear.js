import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gearCtrl from '../controllers/gear.js'

const router = Router()

router.get('/', isLoggedIn, gearCtrl.index)



export {
  router
}