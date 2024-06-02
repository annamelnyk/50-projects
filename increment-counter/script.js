"use strict"

const counters = document.querySelectorAll(".increment-box")
const goals = [12000, 5000, 7500]


counters.forEach((c, index) => updateCounter(c, index))

function updateCounter(c, index) {
  const increment = goals[index] / 200
  const data = Number(c.innerText)

  if (data < goals[index]) {
    c.textContent = `${Math.ceil(data + increment)}`
    setTimeout(() => updateCounter(c, index))
  }
}