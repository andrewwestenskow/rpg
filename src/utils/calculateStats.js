import { ghost, vampire } from 'constants/stats'
import { v4 as uuid } from 'uuid'

export default (level, enemy) => {
  const id = uuid()
  switch (enemy) {
    case 'ghost':
      return { name: 'Ghost', type: 'ghost', id, ...ghost[level] }
    case 'vampire':
      return { name: 'Vampire', type: 'vampire', id, ...vampire[level] }
    default:
      return null
  }
}
