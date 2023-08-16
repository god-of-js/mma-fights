import EventController from '@controllers/EventController'
import EventMiddleware from '@middlewares/EventMiddleware'

import { Router } from 'express'

const router = Router()

router.post(
  '/',
  EventMiddleware.checkCreaterEventData,
  EventController.createEvent
)
router.get('/', EventController.getEvents)
router.get(
  '/:eventId',
  EventMiddleware.checkIfEventExists,
  EventController.getEvent
)
router.delete('/:eventId')

export default router
