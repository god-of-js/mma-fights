import { findAndUpdateEvent, findEvent } from '@data/event/eventRepository'
import { saveFight } from '@data/fight/fightRepository'
import Respond from '@helpers/Respond'
import { NextFunction, Request, Response } from 'express'

class FightController {
  async createFight(req: Request, res: Response, next: NextFunction) {
    try {
      const { event, fighters } = req.body

      const createdFight = await saveFight({ event, fighters })

      const foundEvent = await findEvent(event)
      const dataToUpdateWith: { fights: number[] } = { fights: [] }
      if (foundEvent && foundEvent.fights?.length) {
        dataToUpdateWith.fights = [...foundEvent.fights, createdFight.id]
      } else dataToUpdateWith.fights = [createdFight.id]

      await findAndUpdateEvent(event, dataToUpdateWith)

      return Respond.success(res, 'Fight created successfully', createdFight)
    } catch (err) {
      next(err)
    }
  }
  async getFightsOfAnEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params
    } catch (err) {
      next(err)
    }
  }
}

export default new FightController()
