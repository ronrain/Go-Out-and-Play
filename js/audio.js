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

function audioBiggerHit() {
  biggerHit.volume = 0.25
  biggerHit.play()
}

function audioBoo() {
  boo.volume = 0.25
  boo.play()
}

function audioChirp() {
  chirp.volume = 0.25
  chirp.play()
}

function audioGameplay() {
  gameplay.volume = 0.25
  gameplay.play()
}

function audioGoalHorn() {
  goalHorn.volume = 0.25
  goalHorn.play()
}

function audioHit() {
  hit.volume = 0.25
  hit.play()
}

function audioInterception() {
  interception.volume = 0.25
  interception.play()
}

function audioShotSave() {
  shotSave.volume = 0.25
  shotSave.play()
}

function audioWind() {
  wind.volume = 0.25
  wind.play()
}

function audioWrapGoal() {
  wrapGoal.volume = 0.25
  wrapGoal.play()
}

function audioZBSS() {
  zBSS.volume = 0.25
  zBSS.play()
}

console.log(audioZBSS)

export {
  audioBiggerHit,
  audioBoo,
  audioChirp,
  audioGameplay,
  audioGoalHorn,
  audioHit,
  audioInterception,
  audioShotSave,
  audioWind,
  audioWrapGoal,
  audioZBSS
}