import { Router } from 'express'
import * as mtnsCtrl from '../controllers/mtns.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

/* GET mtns listing. */
router.get('/', mtnsCtrl.index)

export {
  router
}
