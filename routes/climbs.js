import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as climbsCtrl from '../controllers/climbs.js'

const router = Router()

/* GET climbs listing. */
router.get('/', isLoggedIn, climbsCtrl.index)
router.get('/new', isLoggedIn, climbsCtrl.new)
router.get('/:id', isLoggedIn, climbsCtrl.show)
router.get('/:climbId/reviews/:reviewId/edit', isLoggedIn, climbsCtrl.editReview)

/* POST climbs */
router.post('/', isLoggedIn, climbsCtrl.create)
router.post('/:id/reviews', isLoggedIn, climbsCtrl.createReview)

/* PUT review update on climb */

router.put('/:climbId/reviews/:reviewId', isLoggedIn, climbsCtrl.updateReview)

/* DELETE */
router.delete('/:climbId/reviews/:reviewId', isLoggedIn, climbsCtrl.deleteReview)


export {
  router
}
