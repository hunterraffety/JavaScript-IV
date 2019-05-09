'use strict';

class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game. :( Pwned!`;
  }
}

class CharacterStats extends GameObject {
  constructor(attrs) {
    super(attrs);
    this.healthPoints = attrs.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage!!!`;
  }
}

class Humanoid extends CharacterStats {
  constructor(attrs) {
    super(attrs);
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
  }
  greet() {
    return `${this.name} offers an enthusiastic greeting in ${this.language}!`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(archer.weapons);
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
