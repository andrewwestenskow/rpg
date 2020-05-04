import { v4 as uuid } from 'uuid'

class Hero {
  constructor(name, speed, maxHp, hp, id) {
    this.level = 1
    this.maxHp = maxHp
    this.hp = hp || maxHp
    this.speed = speed
    this.name = name
    this.id = id || uuid()
    this.isDead = false
  }

  takeDamage = (amount) => {
    this.hp -= amount
    if (this.hp <= 0) {
      this.isDead = true
    }
  }

  resurrect = () => {
    this.hp = this.maxHp
    this.isDead = false
  }
}

export default Hero
