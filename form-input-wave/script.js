"use strict"

const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const emailLabelLetters = document.querySelectorAll(
  ".email-label .label-letter"
)
const passwordLabelLetters = document.querySelectorAll(
  ".password-label .label-letter"
)
const delay = 70

focusElement(emailInput, emailLabelLetters);
blurElement(emailInput, emailLabelLetters);
focusElement(passwordInput, passwordLabelLetters);
blurElement(passwordInput, passwordLabelLetters);

function focusElement(element, letters) {
  element.addEventListener("focus", () => {
    let time = 0
    letters.forEach(letter => {
      setTimeout(() => letter.classList.add("focus"), time)
      time += delay
    })
  })
}

function blurElement(element, letters) {
  element.addEventListener("blur", () => {
    let time = 0
    letters.forEach(letter => {
      setTimeout(() => letter.classList.remove("focus"), time)
      time += delay
    })
  })
}
