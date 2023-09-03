/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let currentIndex = 0

/*------------------------ Cached Element References ------------------------*/

const messageEl = document.querySelector(".msg")
const buttonElOne = document.querySelector(".btn-1")
const buttonElTwo = document.querySelector(".btn-2")
const buttonElThree = document.querySelector(".btn-3")

console.log(buttonElOne)

/*----------------------------- Event Listeners -----------------------------*/

buttonElOne.addEventListener('click',handleClick)
buttonElTwo.addEventListener('click',handleClick)
buttonElThree.addEventListener('click',handleClick)

/*-------------------------------- Functions --------------------------------*/

init()

function init(){
currentIndex = 0
  buttonElOne.textContent =(adventEls[currentIndex].optionOne)
  buttonElTwo.textContent=(adventEls[currentIndex].optionTwo)
  buttonElThree.textContent=(adventEls[currentIndex].optionThree)
  messageEl.textContent = (adventEls[currentIndex].optionText)
  buttonElOne.id = 1 
  buttonElTwo.id = 2
  buttonElThree.id = 3
}

function handleClick(evt){
  currentIndex = evt.target.id 
  const currentElement = adventEls[currentIndex]
  if (currentElement.optionOneResult !== null || currentElement.optionTwoResult !== null || currentElement.optionThreeResult !== null) {
    buttonElOne.style.display = 'inline'
    buttonElTwo.style.display = 'inline'
    buttonElThree.style.display = 'inline'
  } else {
    //hide buttons if there are no more options
    buttonElOne.style.display = 'none'
    buttonElTwo.style.display = 'none'
    buttonElThree.style.display = 'none'
  }
}