"use strict"
const CLASS_SHOW = "show"
const button = document.getElementById("button")
const input = document.getElementById("input")

button.addEventListener("click", () => {
  if (input.className.includes(CLASS_SHOW)) {
    input.classList.remove(CLASS_SHOW)
  } else {
    input.classList.add(CLASS_SHOW)
    input.focus()
  }
})
