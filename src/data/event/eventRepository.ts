import { AppDataSource } from '@data/db'
import { Event as EventEntity } from './Event'
import Event from '@interfaces/Event'
import { Fighter } from '@data/fighter/Fighter'

export function createEvent(data: Event) {
  const eventRepository = AppDataSource.getRepository(EventEntity)

  return eventRepository.save(data)
}

export function findEvents() {
  const eventRepository = AppDataSource.getRepository(EventEntity)

  return eventRepository.find({})
}

export async function findEvent(eventId: number) {
  const eventRepository = AppDataSource.getRepository(EventEntity)
  const fighterRepository = AppDataSource.getRepository(Fighter)
  const foundEvent = await eventRepository.findOne({ where: { id: eventId } })

  if (!foundEvent) return null

  const fighterIds = foundEvent.fighters.map((fighterId) => ({ id: fighterId }))
  const fighters = await fighterRepository.findBy(fighterIds)

  return {
    ...foundEvent,
    fighters,
  }
}
