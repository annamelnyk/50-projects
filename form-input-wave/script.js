"use strict"

const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const emailLabelLetters = document.querySelectorAll(
  ".email-label .label-letter"
)
const passwordLabelLetters = document.querySelectorAll(
  ".password-label .label-letter"
)

focusElement(emailInput, emailLabelLetters);
blurElement(emailInput, emailLabelLetters);
focusElement(passwordInput, passwordLabelLetters);
blurElement(passwordInput, passwordLabelLetters);

function focusElement(element, letters) {
  element.addEventListener("focus", () => {
    let time = 0
    for (let i = 0; i < letters.length; i++) {
      setTimeout(() => {
        letters[i].classList.add("focus")
      }, time)
      time += 100
    }
  })
}

function blurElement(element, letters) {
  element.addEventListener("blur", () => {
    let time = 0
    for (let i = 0; i < letters.length; i++) {
      setTimeout(() => {
        letters[i].classList.remove("focus")
      }, time)
      time += 100
    }
  })
}
