import Hero from './Hero'

class Mage extends Hero {
  constructor(
    name,
    customId,
    hpOverride,
    speedOverride,
    maxHpOverride,
    levelOverride
  ) {
    super(
      name,
      speedOverride || 50,
      maxHpOverride || 100,
      hpOverride,
      customId,
      levelOverride
    )
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
