"use strict"

const CLASS_ACTIVE = "active"
const stepsParent = document.getElementById("steps")
const allSteps = document.getElementsByClassName("step")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

renderProgresSteps()

prevButton.addEventListener("click", (e) => {
  const activeSteps = document.getElementsByClassName("step active")

  for (let i = activeSteps.length; i > 0; i--) {
    if (activeSteps.length > 1) {
      inactive(activeSteps[i - 1])
    }
    if (activeSteps.length === 1) {
      inactive(prevButton)
    }

    if (activeSteps.length < allSteps.length) {
      active(nextButton)
    }

    break
  }
})

nextButton.addEventListener("click", (e) => {
  const activeSteps = document.getElementsByClassName("step active")

  for (let i = activeSteps.length; i <= allSteps.length; i++) {
    if (activeSteps.length < allSteps.length - 1) {
      active(allSteps[i])
    } else {
      active(allSteps[i])
      inactive(nextButton)
    }

    if (activeSteps.length > 0) {
      active(prevButton)
    }

    break
  }
})

function renderProgresSteps(stepsAmount = 5, container = stepsParent) {
  for (let i = 0; i < stepsAmount; i++) {
    const step = document.createElement("div")
    step.classList.add("step")
    if (i === 0) {
      step.classList.add(CLASS_ACTIVE)
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

function active(el) {
  el.classList.add(CLASS_ACTIVE)
}

function inactive(el) {
  el.classList.remove(CLASS_ACTIVE)
}
