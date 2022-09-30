import { Router } from 'express'

const router = Router()

/* GET mtns listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
