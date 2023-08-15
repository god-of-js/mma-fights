import { Router } from 'express'
import Respond from '../helpers/Respond'

const router = Router()

/* GET home page. */
router.get('/', (req, res) => {
  return Respond.success(res, 'Welcome to truckdispatch API.')
})

export default router
