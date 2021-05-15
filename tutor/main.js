// HARRISON WAS HERE

let health = 100
let computerHealth = 100

let computerAttacks = ['dagger', 'sword', 'pickaxe']

let attacks = {
  dagger: {
    name: "needle",
    damage: 5,
    price: 5
  },
  sword: {
    name: "master sword",
    damage: 15,
    price: 10
  },
  pickaxe: {
    name: "rune",
    damage: 25,
    price: 15
  }
}


// this function has a parameter - and we pass the actual value as an 'argument' from the button which is calling this function
function attack(playerInput) {
  let cAttack = computerChoice()
  console.log("computer attack", cAttack);
  let weaponChoice = attacks[playerInput]
  draw(cAttack)
}

function draw(compAttack) {
  document.getElementById('health').innerHTML = /*html*/ `
  <h1>${health}</h1>
  `
  document.getElementById('computer-choice').innerHTML = /*html*/ `
  <h1>${compAttack.name}</h1>
  `
}

function computerChoice() {
  let compAttack = computerAttacks[Math.floor(Math.random() * computerAttacks.length)]
  return attacks[compAttack]
}

draw()