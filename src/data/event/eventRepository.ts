import { AppDataSource } from '@data/db'
import { Event as EventEntity } from './Event'
import Event from '@interfaces/Event'
import { findFightersByCondition } from '@data/fighter/fighterRepository'

export function createEvent(data: Event) {
  const eventRepository = AppDataSource.getRepository(EventEntity)

  return eventRepository.save(data)
}

export function findEvents() {
  const eventRepository = AppDataSource.getRepository(EventEntity)

  return eventRepository.find({})
}

export async function findAndUpdateEvent(
  eventId: number,
  data: Partial<Event>
) {
  const eventRepository = AppDataSource.getRepository(EventEntity)

  const foundEvent = await eventRepository.findOne({ where: { id: eventId } })

  return eventRepository.save({
    ...foundEvent,
    ...data,
  })
}

export async function findEvent(eventId: number) {
  const eventRepository = AppDataSource.getRepository(EventEntity)
  const foundEvent = await eventRepository.findOne({ where: { id: eventId } })

  if (!foundEvent) return null

  if (!foundEvent.fighters || !foundEvent.fighters.length) return foundEvent
  const fighters = await findFightersByCondition(foundEvent.fighters)
  return {
    ...foundEvent,
    fighters,
  }
}
