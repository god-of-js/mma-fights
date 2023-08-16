import { AppDataSource } from '@data/db'
import Fight from '@interfaces/Fight'
import { In } from 'typeorm'
import { Fight as FightEntity } from './Fight'

interface GetFightsParam extends Partial<Fight> {
  fighters?: any
}
export function saveFight(fight: Partial<Fight>) {
  const fightRepository = AppDataSource.getRepository(FightEntity)

  return fightRepository.save(fight)
}

export function getFightsBy(param: GetFightsParam) {
  const fightRepository = AppDataSource.getRepository(FightEntity)
  const dataToSearchWith = param

  if (param.fighters && param.fighters.length > 0) {
    dataToSearchWith.fighters = In(param.fighters)
  }

  return fightRepository.find({ where: dataToSearchWith })
}
