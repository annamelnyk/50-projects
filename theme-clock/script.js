"use strict"

const main = document.querySelector(".main")
const modeBtn = document.querySelector(".mode")
const dateBlock = document.querySelector(".date-block")
const timeBlock = document.querySelector(".time-block")

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

showTime().then(displayDateAndTime)

// helpers
function showTime() {
  return new Promise(resolve => {
    const intId = setInterval(() => {
      clearInterval(intId);
      resolve();
    }, 1000)
  })
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

  const dateSpan = document.createElement("span")
  dateSpan.classList.add("date")
  dateSpan.textContent = date

  dateBlock.textContent = `${dayNames[day]}, ${monthNames[month]}`
  dateBlock.appendChild(dateSpan)
  timeBlock.textContent = getTimeFormat()
}

function getTimeFormat() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let newformat = hours >= 12 ? 'PM' : 'AM';

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes} ${newformat}`;
}

