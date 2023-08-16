import FighterController from '@controllers/FighterController'
import FighterMiddleware from '@middlewares/FighterMiddleware'
import { Router } from 'express'

const router = Router()

router.post(
  '/',
  FighterMiddleware.checkCreaterFighterData,
  FighterController.createFighter
)
router.get('/', FighterController.loadFighters)
router.get(
  '/:fighterId',
  FighterMiddleware.checkIfFighterExists,
  FighterController.loadFighter
)
router.delete(
  '/:fighterId',
  FighterMiddleware.checkIfFighterExists,
  FighterController.deleteFighter
)

export default router
