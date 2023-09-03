/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



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