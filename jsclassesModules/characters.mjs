//👾☠️🤖❤️🗡
// https://www.youtube.com/watch?v=PXn6jrSHf9k&list=PLQnljOFTspQWab0g3W6ZaDM6_Buh20EWM&index=11
// https://www.youtube.com/watch?v=tWQuOgRViaI&list=PLQnljOFTspQWab0g3W6ZaDM6_Buh20EWM&index=8
class Character {
  constructor (icon, hp, atk) {
    this.icon = icon;
    this.hp = hp;
    this.atk = atk;
  }

  getHP() {
    const div = document.createElement("div")
    for (let i = 0; i < this.hp; i++) {
      div.appendChild(document.createTextNode('❤️'));
    }
    return div;
  }

  getATK() {
    const div = document.createElement("div")
    for (let i = 0; i < this.atk; i++) {
      div.appendChild(document.createTextNode('🗡'))
    }
    return div
  }

  getStats() {
    const div = document.createElement("div");
    // div.character = this  // hacky
    // const character = this // second way
    div.appendChild(document.createTextNode(`${this.icon} `));
    div.appendChild(this.getHP());
    div.appendChild(document.createTextNode(`ATK: ${this.atk}`));
    div.appendChild(document.createElement('hr'))
    // div.addEventListener('click', e => e.target.character.attack()) // with hacky way
    // div.addEventListener('click', e => character.attack()) //second way
    div.addEventListener('click', this.attack) // BEST WAY
    return div;
  }
}

// Sub class
export class Robot extends Character {
  constructor() {
    super('🤖', 20, 2)
  }

  attack() {
    alert("Robot attacks!")
  }
}

// Sub class
export class Monster extends Character {
  constructor() {
    super('👾', 15, 5)
  }

  attack() {
    alert("Monster attacks!")
  }
}

// Sub class
export class Reaper extends Character {
  constructor() {
    super('☠️', 10, 8)
  }

  attack() {
    alert('Reaper attacks!')
  }
}