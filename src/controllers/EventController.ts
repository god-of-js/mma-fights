import { NextFunction, Request, Response } from 'express'

class EventController {
  createEvent(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      next(e)
    }
  }
}

export default new EventController()
