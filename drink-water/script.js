"use strict"

const smallGlass = document.querySelectorAll(".glasses .glass")
const glassesContainer = document.querySelector(".glasses")
const remainingAmountNode = document.querySelector(".remained-amount")
let filledAmountNode = document.querySelector(".filled-amount")

glassesContainer.onclick = function (e) {
  if (e.target.className === "glass") {
    e.target.classList.add("filled")
    fillBigGlass()
  }
}

function fillBigGlass() {
  let remainingAmountInMl = remainingAmountNode.textContent.split("L")[0] * 1000
  console.log("remainingAmountInMl", remainingAmountInMl)
  let filledAmount = filledAmountNode.textContent.split("%")[0]
  console.log("filledAmount", filledAmount)
  if (!filledAmount) filledAmount = 0
  filledAmount = filledAmount * 100 + 250
  remainingAmountInMl = remainingAmountInMl - filledAmount
  remainingAmountNode.textContent = `${remainingAmountInMl / 1000}L`
  filledAmountNode.textContent = `${filledAmount / 100}%`
}
