//👾☠️🤖

class Character {
  constructor (icon, hp, atk) {
    this.icon = icon;
    this.hp = hp;
    this.atk = atk;
  }

  getStats() {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(`${this.icon} `));
    div.appendChild(document.createTextNode(`HP: ${this.hp} `));
    div.appendChild(document.createTextNode(`ATK: ${this.atk}`));
    return div;
  }
}

const divArena = document.getElementById('divArena');

const robot = new Character('🤖', 20, 2)
const monster = new Character('👾', 15, 5)
const reaper = new Character('☠️', 10, 8)

const characters = [];
characters.push(robot)
characters.push(monster)
characters.push(reaper)

characters.forEach(el => divArena.appendChild(el.getStats()))