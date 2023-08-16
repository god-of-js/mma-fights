import { createEvent, findEvent, findEvents } from '@data/event/eventRepository'
import Respond from '@helpers/Respond'
import { NextFunction, Request, Response } from 'express'

class EventController {
  async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, fighters, fights, location, date } = req.body

      const createdEvent = await createEvent({
        title,
        fighters,
        fights,
        location,
        date,
      })

      return Respond.success(res, 'Event created successfully...', createdEvent)
    } catch (e) {
      next(e)
    }
  }

  async getEvents(_: Request, res: Response, next: NextFunction) {
    try {
      const loadedEvents = await findEvents()

      return Respond.success(res, 'Events fetched successfully', loadedEvents)
    } catch (e) {
      next(e)
    }
  }

  async getEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params
      const loadedEvent = await findEvent(Number(eventId))

      return Respond.success(res, 'Event fetched successfully', loadedEvent)
    } catch (e) {
      next(e)
    }
  }

  async updateEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const loadedEvents = await findEvents()

      return Respond.success(res, 'Events fetched successfully', loadedEvents)
    } catch (e) {
      next(e)
    }
  }
}

export default new EventController()
