/*-------------------------------- Constants --------------------------------*/

import { adventEls } from "./adventure.js"
import * as audioAd from "./audio.js" 

/*-------------------------------- Variables --------------------------------*/

let currentIndex = 0

/*------------------------ Cached Element References ------------------------*/

const messageEl = document.querySelector(".msg")
const optionElOne = document.querySelector(".btn-1")
const optionElTwo = document.querySelector(".btn-2")
const optionElThree = document.querySelector(".btn-3")
const adventImage = document.getElementById("adventImage")
const audioAdvent = document.getElementById("audio")


/*----------------------------- Event Listeners -----------------------------*/

optionElOne.addEventListener('click',handleClick)
optionElTwo.addEventListener('click',handleClick)
optionElThree.addEventListener('click',handleClick)

/*-------------------------------- Functions --------------------------------*/

init()
render()

function init(){
  currentIndex = 0
    optionElOne.textContent =(adventEls[currentIndex].optionOne)
    optionElTwo.textContent=(adventEls[currentIndex].optionTwo)
    optionElThree.textContent=(adventEls[currentIndex].optionThree)
    messageEl.textContent = (adventEls[currentIndex].optionText)
      optionElOne.id = 1 
      optionElTwo.id = 2
      optionElThree.id = 3
}

function handleClick(evt){
  currentIndex = parseInt(evt.target.id) 
    const currentElement = adventEls[currentIndex]  
      if (!currentElement.optionOne){
      optionElOne.style.display = "none"
      } else {
        optionElOne.style.display = "inline"
      }
      if (!currentElement.optionTwo){
      optionElTwo.style.display = "none"
      } else {
      optionElTwo.style.display = "inline"
      }
      if (!currentElement.optionThree){
      optionElThree.style.display = "none"
      } else {
      optionElThree.style.display = "inline"
      }
  render()
  audio()
}

function render(){
  optionElOne.textContent = adventEls[currentIndex].optionOne //updates text content
  optionElOne.id = adventEls[currentIndex].optionOneResult || 'none' // checks if falsy(if need an option)
  
  optionElTwo.textContent = adventEls[currentIndex].optionTwo
  optionElTwo.id = adventEls[currentIndex].optionTwoResult || 'none'
  
  optionElThree.textContent = adventEls[currentIndex].optionThree
  optionElThree.id = adventEls[currentIndex].optionThreeResult || 'none'
  
  messageEl.textContent = adventEls[currentIndex].optionText

  adventImage.src = adventEls[currentIndex].imageEl

  audioAdvent.src = adventEls[currentIndex].audioAd
}

function audio(){
  if (adventEls[currentIndex].audioAd === "biggerhit"){
    audioAd.audioBhit()
  }
  if (adventEls[currentIndex].audioAd === "boo"){
    audioAd.audioBoo()
  }
  if (adventEls[currentIndex].audioAd === "booo"){
    audioAd.audioBooo()
  }
  if (adventEls[currentIndex].audioAd === "chirp"){
    audioAd.audioChirp()
  }
  if (adventEls[currentIndex].audioAd === "gameplay"){
    audioAd.audioGameplay()
  }
  if (adventEls[currentIndex].audioAd === "hit"){
    audioAd.audioHit()
  }
  if (adventEls[currentIndex].audioAd === "horn"){
    audioAd.audioHit()
  }
  if (adventEls[currentIndex].audioAd === "interception"){
    audioAd.audioInterception()
  }
  if (adventEls[currentIndex].audioAd === "shotsave"){
    audioAd.audioShotsave()
  }
  if (adventEls[currentIndex].audioAd === "wind"){
    audioAd.audioWind()
  }
  if (adventEls[currentIndex].audioAd === "wrapgoal"){
    audioAd.audioWrapgoal()
  }
  if (adventEls[currentIndex].audioAd === "zbss"){
    audioAd.audioZbss()
  }
}
