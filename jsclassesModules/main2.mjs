import { Robot } from './characters.mjs';
import { Monster } from './characters.mjs';
import { Reaper } from './characters.mjs';

const divArena = document.getElementById('divArena');
// MADE from the CHARACTER Class
// const robot = new Character('🤖', 20, 2)
// const monster = new Character('👾', 15, 5)
// const reaper = new Character('☠️', 10, 8)

// MADE from the Character extended specific classes
const robot = new Robot();
const monster = new Monster();
const reaper = new Reaper();

const characters = [];
characters.push(new Robot)
characters.push(robot)
characters.push(monster)
characters.push(reaper)

characters.forEach(el => divArena.appendChild(el.getStats()))

robot.attack();