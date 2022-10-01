import { Router } from 'express'
import * as mtnsCtrl from '../controllers/mtns.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

/* GET mtns listing. */
router.get('/', mtnsCtrl.index)
router.get('/new', mtnsCtrl.new)

/* POST mtns */
router.post('/', mtnsCtrl.create)

export {
  router
}
