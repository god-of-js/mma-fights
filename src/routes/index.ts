import { Router } from 'express'
import Respond from '../helpers/Respond'
import fighter from './fighter.routes'
import event from './event.routes'

const router = Router()

router.use('/fighter', fighter)
router.use('/event', event)

/* GET home page. */
router.get('/', (req, res) => {
  return Respond.success(res, 'Welcome to the MMA fights API.')
})

export default router
