"use strict"

const choicesBox = document.querySelector(".choices-box")
const textarea = document.querySelector(".textarea")
let isNewChoice = true
let currentChoice = null
let animationStarted = false
let interval

textarea.addEventListener("keyup", (e) => {
  console.log(e)
  if (e.code === "Enter") {
    setRandomChoice(5)
    e.target.value = ""
    return
  }

  if (e.code === "Escape" && animationStarted) {
    animationStarted = false
    clearInterval(interval)

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
  if (animationStarted) return
  animationStarted = true

  let timer = random
  choices.forEach((ch) => {
    interval = setInterval(() => {
      setTimeout(() => ch.classList.add("highlighted"), timer)
      timer = timer + 100
      setTimeout(() => ch.classList.remove("highlighted"), timer)
      timer = timer + 50
    }, 10)
  })
}
