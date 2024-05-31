"use strict"

const choicesBox = document.querySelector(".choices-box")
const textarea = document.querySelector(".textarea")
let isNewChoice = true
let currentChoice = null

textarea.addEventListener("keyup", (e) => {
  console.log(e)
  if (e.code === "Enter") {
    setRandomChoice(5)
    return
  }

  if (e.code === "Comma") {
    isNewChoice = true
    currentChoice = null
    return
  }

  if (isNewChoice) {
    generateChoice()
    updateChoice(e.key)
    isNewChoice = false
  } else {
    updateChoice(e.key)
  }
})

function generateChoice() {
  currentChoice = document.createElement("span")
  currentChoice.classList.add("choice")
  choicesBox.appendChild(currentChoice)
}

function updateChoice(data) {
  currentChoice.textContent = currentChoice.textContent + data
}

function setRandomChoice(random) {
  const choices = document.querySelectorAll(".choice")
  if (random === 0) return
  choices.forEach(ch => {
    ch.classList.add('highlighted')
    setTimeout(() => ch.classList.remove('highlighted'), 100)
  } )

  setRandomChoice(random - 1)
}
