//Variable
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//event
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick(event);
    }
});

//function 
function handleTryClick(event) {
    event.preventDefault() //

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        if (xAttempts === 1) {
            screen2.querySelector("h2").innerText = "You got it on the first try!";
        } else {
            screen2.querySelector("h2").innerText = `You got it in ${xAttempts} attempts`;
        }
    }

    inputNumber.value = ""
    xAttempts++    
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
