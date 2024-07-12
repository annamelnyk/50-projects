"use strict"

const button = document.querySelector(".btn")

button.addEventListener("click", (e) => {
  const ripple = document.querySelector(".ripple")
  const newNode = ripple.cloneNode(true)

  newNode.classList.add("animate")
  newNode.style.left = e.offsetX + "px"
  newNode.style.top = e.offsetY + "px"

  button.replaceChild(newNode, ripple)
})
