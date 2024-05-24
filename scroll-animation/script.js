"use strict"
const main = document.querySelector(".main")
const content = document.querySelectorAll(".content")

window.addEventListener("scroll", (e) => {
  const triggerBottom = window.innerHeight / 5 * 4
  content.forEach(el => {
    const elTop = el.getBoundingClientRect().top

    if (elTop < triggerBottom) {
      el.classList.remove('scroll-animation')
    } else {
      el.classList.add('scroll-animation')
    }
  })
})
