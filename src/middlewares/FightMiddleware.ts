import { findEvent } from '@data/event/eventRepository'
import { findFightersByCondition } from '@data/fighter/fighterRepository'
import Respond from '@helpers/Respond'
import { NextFunction, Request, Response } from 'express'

class FightMiddleware {
  async checkDataForCreatingFight(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { event, fighters } = req.body

      if (!event) return Respond.error(res, 'Event must be passed')

      if (!fighters || fighters.length < 2)
        return Respond.error(res, 'Two fighters must be passed', 401)

      const foundEvent = await findEvent(event)

      if (!foundEvent)
        return Respond.error(res, 'Event does not exist in our database', 404)

      const populatedFighters = await findFightersByCondition(fighters)

      if (populatedFighters.length < 2)
        return Respond.error(
          res,
          'One or more of the fighters provided do not exist.'
        )

      next()
    } catch (err) {
      return Respond.error(res, 'Something went wrong.', 500)
    }
  }
}

export default new FightMiddleware()
