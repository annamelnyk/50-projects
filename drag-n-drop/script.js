"use strict"

const CLASS_EMPTY = "empty"
const CLASS_HIDDEN = "hidden"
const CLASS_WARNING = "warning"
const CLASS_BLOCK = "block"
const CLASS_DRAGGED = "dragged"
const CLASS_DRAGOVER = "dragover"

const main = document.querySelector(".main")
let emptyDivs
let draggableBlock

createDraggableBlocks()

function createDraggableBlocks() {
  for (let i = 0; i < 5; i++) {
    const empty = document.createElement("div")
    empty.classList.add(CLASS_EMPTY)
    main.appendChild(empty)
    empty.addEventListener("dragstart", dragstart)
    empty.addEventListener("touchstart", touchstart)
    empty.addEventListener("dragenter", dragenter)
    empty.addEventListener("dragleave", dragleave)
    empty.addEventListener("dragover", dragover)
    empty.addEventListener("dragend", dragend)
    empty.addEventListener("touchend", touchend)
    empty.addEventListener("drop", drop)
  }

  emptyDivs = document.querySelectorAll(".empty")
  draggableBlock = document.createElement("div")
  draggableBlock.classList.add(CLASS_BLOCK)
  draggableBlock.setAttribute("draggable", true)
  emptyDivs[0].appendChild(draggableBlock)
}

function dragstart(event) {
  console.log("dragstart")
  //event.dataTransfer.setData("text/html", event.target)
  draggableBlock.classList.add(CLASS_DRAGGED)
  setTimeout(() => draggableBlock.classList.add(CLASS_HIDDEN), 0)
}

function dragenter(event) {
  console.log("dragenter")
  //draggableBlock.classList.add(CLASS_DRAGGED)
}

function dragleave(event) {
  console.log("dragleave")
  event.target.classList.remove(CLASS_DRAGOVER)
}

function dragover(event) {
  console.log("dragover")
  event.preventDefault()
  event.target.classList.add(CLASS_DRAGOVER)
}

function dragend(event) {
  console.log("dragend")
  draggableBlock.classList.remove(CLASS_DRAGGED)
  Array.from(emptyDivs).forEach((div) => div.classList.remove(CLASS_DRAGOVER))
  draggableBlock.classList.remove(CLASS_HIDDEN)
}

function drop(event) {
  console.log("drop")
  if ([...event.target.classList].includes(CLASS_EMPTY)) {
    draggableBlock.parentNode.removeChild(draggableBlock)
    event.target.appendChild(draggableBlock)
    draggableBlock.classList.remove(CLASS_HIDDEN)
  }
}

function touchstart() {
  const warning = document.createElement("h1")
  warning.classList.add(CLASS_WARNING)
  main.insertBefore(warning, main.firstChild)
  warning.textContent = 'Warning touchpad is inactive'
}

function touchend() {
  main.removeChild(document.querySelector('.warning'))
}
