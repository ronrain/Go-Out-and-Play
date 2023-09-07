let bhit = new Audio('../audio/biggerhit.mp3')
let boo = new Audio('../audio/boo.mp3')
let booo = new Audio('../audio/booo.mp3')
let chirp = new Audio('../audio/chirp.mp3')
let gameplay = new Audio('../audio/gameplay.mp3')
let horn = new Audio('../audio/horn.mp3')
let hit = new Audio('../audio/hit.mp3')
let interception = new Audio('../audio/interception.mp3')
let shotsave = new Audio('../audio/shotsave.mp3')
let wind = new Audio('../audio/wind.mp3')
let wrapgoal = new Audio('../audio/wrapgoal.mp3')
let zbss = new Audio('../audio/zibbreadshotsave.mp3')

function audioBhit() {
  bhit.volume = 0.25
  bhit.play()
}

function audioBoo() {
  boo.volume = 0.25
  boo.play()
}

function audioBooo() {
  booo.volume = 0.25
  booo.play()
}

function audioChirp() {
  chirp.volume = 0.25
  chirp.play()
}

function audioGameplay() {
  gameplay.volume = 0.25
  gameplay.play()
}

function audioHorn() {
  horn.volume = 0.25
  horn.play()
}

function audioHit() {
  hit.volume = 0.25
  hit.play()
}

function audioInterception() {
  interception.volume = 0.25
  interception.play()
}

function audioShotsave() {
  shotsave.volume = 0.25
  shotsave.play()
}

function audioWind() {
  wind.volume = 0.25
  wind.play()
}

function audioWrapgoal() {
  wrapgoal.volume = 0.25
  wrapgoal.play()
}

function audioZbss() {
  zbss.volume = 0.25
  zbss.play()
}


export {
  audioBhit,
  audioBoo,
  audioBooo,
  audioChirp,
  audioGameplay,
  audioHorn,
  audioHit,
  audioInterception,
  audioShotsave,
  audioWind,
  audioWrapgoal,
  audioZbss
}