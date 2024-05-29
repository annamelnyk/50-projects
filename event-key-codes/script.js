"use strict"

const resultContainer = document.querySelector(".box")

document.addEventListener("keydown", (e) => {
  resultContainer.textContent = e.code
})
