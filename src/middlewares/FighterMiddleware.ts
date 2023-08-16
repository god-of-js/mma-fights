import { findFighter } from '@data/fighter/fighterRepository'
import Respond from '@helpers/Respond'
import { NextFunction, Request, Response } from 'express'

class FighterMiddleware {
  checkCreaterFighterData(req: Request, res: Response, next: NextFunction) {
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

      if (
        !name ||
        !knockouts ||
        !wins ||
        !losses ||
        !submissions ||
        !weight ||
        !nationality ||
        !team
      ) {
        return Respond.error(
          res,
          'name, knockouts, wins, losses, submissions, weight, nationality, team, are all compulsory fields'
        )
      }

      next()
    } catch (e) {
      return Respond.error(res, 'Something occured', 500)
    }
  }
  async checkIfFighterExists(req: Request, res: Response, next: NextFunction) {
    try {
      const { fighterId } = req.params

      const fighter = await findFighter(Number(fighterId))

      if (!fighter)
        return Respond.error(res, 'Fighter does not exist in our database', 404)

      next()
    } catch (err) {
      return Respond.error(res, 'Something occured', 500)
    }
  }
}

export default new FighterMiddleware()
