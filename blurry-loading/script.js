"use strict"

const progress = document.getElementById("loading-progress")
const mainPage = document.getElementById("main")
const blurContainer = document.getElementById("blur")
let blurValue = 10
let opacity = 1

window.addEventListener("load", () => {
  blurContainer.style.backdropFilter = `blur(${blurValue}px)`
  for (let i = 0; i <= 100; i++) {
    delay(i, 50)
  }
})

function delay(value, time) {
  setTimeout(() => {
    progress.textContent = `${value}%`
    blurValue = blurValue - getHundredPart(blurValue)
    opacity = opacity - getHundredPart(opacity)
    progress.style.opacity = opacity
    blurContainer.style.backdropFilter = `blur(${blurValue}px)`

    if (value === 100) {
      blurContainer.remove()
      progress.remove()
    }
  }, time * value)
}

function getHundredPart(value) {
  return value / 100
}
