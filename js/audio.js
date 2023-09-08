let boo = new Audio('../audio/boo.mp3')
let gloves = new Audio('../audio/gloves.mp3')
let goal = new Audio('../audio/goal.mp3')
let hit = new Audio('../audio/hit.mp3')
let hurt = new Audio('../audio/hurt.mp3')
let save = new Audio('../audio/save.mp3')
let skates = new Audio('../audio/skates.mp3')
let whistle = new Audio("../audio/whistle.mp3")

function audioBoo() {
  boo.volume = 0.25
  boo.play()
}

function audioGloves() {
  gloves.volume = 0.25
  gloves.play()
}

function audioGoal() {
  goal.volume = 0.25
  goal.play()
}

function audioHit() {
  hit.volume = 0.25
  hit.play()
}

function audioHurt() {
  hurt.volume = 0.25
  hurt.play()
}

function audioSave() {
  save.volume = 0.25
  save.play()
}

function audioSkates() {
  skates.volume = 0.25
  skates.play()
}

function audioWhistle() {
  whistle.volume = 0.25
  whistle.play()
}


export {
  audioBoo,
  audioGloves,
  audioGoal,
  audioHit,
  audioHurt,
  audioSave,
  audioSkates,
  audioWhistle
}