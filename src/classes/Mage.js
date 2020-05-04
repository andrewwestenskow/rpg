import Hero from './Hero'

class Mage extends Hero {
  constructor(name) {
    super(name, 50, 100)
    this.class = 'mage'
    this.size = 'small'
    this.attacks = [
      {
        name: 'Fireball',
        type: 'fire',
        damage: { die: 6, count: 2 },
        accuracy: 85,
      },
    ]
  }
}

export default Mage
