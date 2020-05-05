import Mage from 'classes/Mage'

export default (unit) => {
  switch (unit.class) {
    case 'mage':
      return new Mage(...unit.stats)
    default:
      return null
  }
}
