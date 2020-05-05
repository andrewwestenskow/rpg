import asyncLocalStorage from './asyncLocalStorage'

const convertParty = (party) =>
  party.map((e) => ({
    class: e.class,
    stats: [e.name, e.id, e.hp, e.speed, e.maxHp, e.level],
  }))

export default (participants) => {
  const { party } = participants
  const saveReady = convertParty(party)
  asyncLocalStorage.set('party', saveReady, JSON.stringify)
  console.log(saveReady)
}
