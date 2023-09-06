let biggerHit = new Audio('../audio/Bigger Hit.mp3')
let boo = new Audio('../audio/Boo.mp3')
let chirp = new Audio('../audio/Chirp.mp3')
let gameplay = new Audio('../audio/Gameplay sound.mp3')
let goalHorn = new Audio('../audio/Goal Horn.mp3')
let hit = new Audio('../audio/Hit.mp3')
let interception = new Audio('../interception.mp3')
let shotSave = new Audio('../audio/Shot Save.mp3')
let wind = new Audio('../audio/Wind (2).mp3')
let wrapGoal = new Audio('../audio/Wrap goal.mp3')
let zBSS = new Audio('../audio/Zip to bread shot and save.mp3')

function biggerHit() {
  biggerHit.volume = 0.25
  biggerHit.play()
}

function boo() {
  boo.volume = 0.25
  boo.play()
}

function chirp() {
  chirp.volume = 0.25
  chirp.play()
}

function gameplay() {
  gameplay.volume = 0.25
  gameplay.play()
}

function goalHorn() {
  goalHorn.volume = 0.25
  goalHorn.play()
}

function hit() {
  hit.volume = 0.25
  hit.play()
}

function interception() {
  interception.volume = 0.25
  interception.play()
}

function shotSave() {
  shotSave.volume = 0.25
  shotSave.play()
}

function wind() {
  wind.volume = 0.25
  wind.play()
}

function wrapGoal() {
  wrapGoal.volume = 0.25
  wrapGoal.play()
}

function zBSS() {
  zBSS.volume = 0.25
  zBSS.play()
}


export {
  biggerHit,
  boo,
  chirp,
  gameplay,
  goalHorn,
  hit,
  interception,
  shotSave,
  wind,
  wrapGoal,
  zBSS
}