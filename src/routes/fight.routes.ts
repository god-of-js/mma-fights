import FightController from '@controllers/FightController'
import EventMiddleware from '@middlewares/EventMiddleware'
import FightMiddleware from '@middlewares/FightMiddleware'
import { Router } from 'express'

const router = Router()

router.post(
  '/',
  FightMiddleware.checkDataForCreatingFight,
  FightController.createFight
)
export default router
