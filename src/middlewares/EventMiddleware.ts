import { findEvent } from '@data/event/eventRepository'
import Respond from '@helpers/Respond'
import { NextFunction, Request, Response } from 'express'

class EventMiddleware {
  checkCreaterEventData(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, location, date } = req.body

      if (!title || !location || !date) {
        return Respond.error(
          res,
          'title,location, date  are all compulsory fields'
        )
      }

      next()
    } catch (e) {
      return Respond.error(res, 'Something occured', 500)
    }
  }
  async checkIfEventExists(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params

      if (!eventId) return Respond.error(res, 'EventId is compulsory')

      const foundEvent = await findEvent(Number(eventId))

      if (!foundEvent)
        return Respond.error(res, 'Fighter does not exist in our database', 404)

      next()
    } catch (err) {
      return Respond.error(res, 'Something occured', 500)
    }
  }
}
export default new EventMiddleware()
