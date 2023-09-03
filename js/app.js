/*-------------------------------- Constants --------------------------------*/

import { adventEls } from "./adventure.js"

/*-------------------------------- Variables --------------------------------*/

let currentIndex = 0

/*------------------------ Cached Element References ------------------------*/

const messageEl = document.querySelector(".msg")
const optionElOne = document.querySelector(".btn-1")
const optionElTwo = document.querySelector(".btn-2")
const optionElThree = document.querySelector(".btn-3")


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
  currentIndex = evt.target.id 
  const currentElement = adventEls[currentIndex]
  if (currentElement.optionOneResult !== null || currentElement.optionTwoResult !== null || currentElement.optionThreeResult !== null) {
    optionElOne.style.display = 'inline'
    optionElTwo.style.display = 'inline'
    optionElThree.style.display = 'inline'
  } else {
    //hide buttons if there are no more options
    optionElOne.style.display = 'none'
    optionElTwo.style.display = 'none'
    optionElThree.style.display = 'none'
  }
  render()
}

function render(){
  optionElOne.textContent = adventEls[currentIndex].optionOne //updates text content
  optionElOne.id = adventEls[currentIndex].optionOneResult || 'null' // checks if falsy(if need an option)
  optionElTwo.textContent = adventEls[currentIndex].optionTwo
  optionElTwo.id = adventEls[currentIndex].optionTwoResult || 'null'
  optionElThree.textContent = adventEls[currentIndex].optionThree
  optionElThree.id = adventEls[currentIndex].optionThreeResult || 'null'
  messageEl.textContent = adventEls[currentIndex].optionText
}
