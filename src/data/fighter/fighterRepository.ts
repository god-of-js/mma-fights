import { AppDataSource } from '@data/db'
import Fighter from '@interfaces/Fighter'
import { Fighter as FighterEntity } from './Fighter'

export function createFighter(fighter: Fighter) {
  const fighterRepository = AppDataSource.getRepository(FighterEntity)
  return fighterRepository.save(fighter)
}
export function getFighters() {
  const fighterRepository = AppDataSource.getRepository(FighterEntity)
  return fighterRepository.find({})
}

export function getFighter(fighterId: number) {
  const fighterRepository = AppDataSource.getRepository(FighterEntity)
  return fighterRepository.findOne({ where: { id: fighterId } })
}

export function deleteFighter(fighterId: number) {
  const fighterRepository = AppDataSource.getRepository(FighterEntity)

  return fighterRepository.delete(fighterId)
}
