import {
  createFighter,
  deleteFighter,
  findFighter,
  findFighters,
} from '@data/fighter/fighterRepository'
import Respond from '@helpers/Respond'
import { NextFunction, Request, Response } from 'express'

class FighterController {
  async createFighter(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        knockouts,
        wins,
        losses,
        submissions,
        weight,
        nationality,
        team,
      } = req.body

      const newFighter = await createFighter({
        name,
        knockouts,
        wins,
        losses,
        submissions,
        weight,
        nationality,
        team,
      })
      return Respond.success(res, 'Fighter created successfully', newFighter)
    } catch (e) {
      next(e)
    }
  }

  async loadFighters(req: Request, res: Response, next: NextFunction) {
    try {
      const fighters = await findFighters()

      return Respond.success(res, 'Fighters have been fetched', fighters)
    } catch (err) {
      next(err)
    }
  }

  async loadFighter(req: Request, res: Response, next: NextFunction) {
    try {
      const { fighterId } = req.params
      const fighter = await findFighter(Number(fighterId))

      if (!fighter)
        return Respond.error(res, 'Fighter does not exist in our database.')

      return Respond.success(res, 'Fighters have been fetched', fighter)
    } catch (err) {
      next(err)
    }
  }

  async deleteFighter(req: Request, res: Response, next: NextFunction) {
    try {
      const { fighterId } = req.params

      await deleteFighter(Number(fighterId))
      return Respond.success(res, 'Fighter has been deleted')
    } catch (err) {
      next(err)
    }
  }
}

export default new FighterController()
