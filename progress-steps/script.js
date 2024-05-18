"use strict"

const stepsParent = document.getElementById("steps")
const allSteps = document.getElementsByClassName("step")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

renderProgresSteps()

prevButton.addEventListener("click", (e) => {
  const activeSteps = document.getElementsByClassName("step active")
  console.log("activeSteps ", activeSteps)

  for (let i = activeSteps.length; i > 0; i--) {
    if (activeSteps.length === 2) {
      activeSteps[i - 1].classList.remove("active")
      prevButton.classList.remove("active")
    }

    if (activeSteps.length > 1) {
      activeSteps[i - 1].classList.remove("active")
    } else {
      prevButton.classList.remove("active")
    }

    if (activeSteps.length < allSteps.length) {
      nextButton.classList.add("active")
    }

    break
  }
})

nextButton.addEventListener("click", (e) => {
  const activeSteps = document.getElementsByClassName("step active")
  console.log("activeSteps ", activeSteps)

  for (let i = activeSteps.length; i <= allSteps.length; i++) {
    if (activeSteps.length < allSteps.length - 1) {
      allSteps[i].classList.add("active")
    } else {
      allSteps[i].classList.add("active")
      nextButton.classList.remove("active")
    }

    if (activeSteps.length > 0) {
      prevButton.classList.add("active")
    }

    break
  }
})

function renderProgresSteps(stepsAmount = 5, container = stepsParent) {
  for (let i = 0; i < stepsAmount; i++) {
    const step = document.createElement("div")
    step.classList.add("step")
    if (i === 0) {
      step.classList.add("active")
    }
    const stepNumber = document.createElement("div")
    stepNumber.classList.add("step-number")
    stepNumber.textContent = String(i + 1)
    const stepProgress = document.createElement("div")
    stepProgress.classList.add("step-progress")
    container.appendChild(step)
    step.appendChild(stepNumber)
    step.appendChild(stepProgress)
  }
}
