"use strict"

const CLASS_FILLED = "filled"
const smallGlass = document.querySelectorAll(".glasses .glass")
const glassesContainer = document.querySelector(".glasses")
const remainingAmountNode = document.querySelector(".remained-amount")
const remainedNode = document.querySelector(".remained")
let filledAmountNode = document.querySelector(".filled-amount")
const MAX_VOLUME = 2000

glassesContainer.onclick = function (e) {
  if (e.target.className === "glass") {
    e.target.classList.add(CLASS_FILLED)

    const lastIndex = Array.from(smallGlass).findLastIndex((g) =>
      g.className.includes(CLASS_FILLED)
    )
    for (let i = 0; i <= lastIndex; i++) {
      if (!smallGlass[i].className.includes(CLASS_FILLED)) {
        fillBigGlass()
        smallGlass[i].classList.add(CLASS_FILLED)
      }
    }
    fillBigGlass()
  }
}

function fillBigGlass() {
  const filledAmount = calculateFilledAmountInMl()
  const remainingAmount = calculateRemainingAmountInMl(filledAmount)
  const filledAmountNodeContent = `${(filledAmount * 100) / MAX_VOLUME}%`

  remainingAmountNode.textContent = `${remainingAmount / 1000}L`
  filledAmountNode.textContent = filledAmountNodeContent
  filledAmountNode.style.height = filledAmountNodeContent

  if (filledAmountNodeContent === "100%") hideRemainingInfo()
}

function calculateRemainingAmountInMl(filledAmount) {
  return MAX_VOLUME - filledAmount
}

function calculateFilledAmountInMl() {
  let filledAmount = filledAmountNode.textContent.split("%")[0]

  if (!filledAmount) {
    filledAmount = 0
  } else {
    filledAmount = (Number(filledAmount) * MAX_VOLUME) / 100
  }

  filledAmount = Number(filledAmount) + 250

  return filledAmount
}

function hideRemainingInfo() {
  remainingAmountNode.style.display = "none"
  remainedNode.style.display = "none"
}
