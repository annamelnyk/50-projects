"use strict"

const main = document.querySelector(".main")
const modeBtn = document.querySelector(".mode")
const dateBlock = document.querySelector(".date-span")
const dateSpan = document.querySelector(".date")
const timeBlock = document.querySelector(".time-block")
const hourArrow = document.querySelector(".clock .hour")
const minuteArrow = document.querySelector(".clock .minute")
const secondArrow = document.querySelector(".clock .second")

modeBtn.addEventListener("click", () => {
  if (main.classList.contains("light-mode")) {
    main.classList.add("dark-mode")
    main.classList.remove("light-mode")
    modeBtn.textContent = "Light mode"

    return
  }

  if (main.classList.contains("dark-mode")) {
    main.classList.add("light-mode")
    main.classList.remove("dark-mode")
    modeBtn.textContent = "Dark mode"
  }
})

setInterval(displayDateAndTime, 1000)

// helpers
function moveClockArrows(hours, minutes, seconds) {
  hourArrow.style.transform = `rotate(${0 + 30 * hours}deg)`
  minuteArrow.style.transform = `rotate(${0 + 6 * minutes}deg)`
  secondArrow.style.transform = `rotate(${0 + 6 * seconds}deg)`
}

function displayDateAndTime() {
  const now = new Date()
  const date = now.getDate()
  const month = now.getMonth()
  const day = now.getDay()
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ]

  dateSpan.textContent = date

  dateBlock.textContent = `${dayNames[day]}, ${monthNames[month]}`
  timeBlock.textContent = getTimeFormat()
}

function getTimeFormat() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let newformat = hours >= 12 ? "PM" : "AM"

  // Find current hour in AM-PM Format
  hours = hours % 12

  // To display "0" as "12"
  hours = hours ? hours : 12
  minutes = minutes < 10 ? "0" + minutes : minutes

  moveClockArrows(hours, minutes, seconds)
  return `${hours}:${minutes} ${newformat}`
}
