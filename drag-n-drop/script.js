"use strict"

const CLASS_EMPTY = 'empty';
const CLASS_BLOCK = 'block';
const CLASS_DRAGGED = 'dragged';
const CLASS_DRAGOVER = 'dragover';

const main = document.querySelector(".main")
let emptyDivs
let draggableBlock

createDraggableBlocks()

function createDraggableBlocks() {
  for (let i = 0; i < 5; i++) {
    const empty = document.createElement("div")
    empty.classList.add(CLASS_EMPTY)
    main.appendChild(empty)
    addDragListeners(empty)
  }

  emptyDivs = document.querySelectorAll(".empty")
  draggableBlock = document.createElement("div")
  draggableBlock.classList.add(CLASS_BLOCK)
  draggableBlock.setAttribute("draggable", true)
  emptyDivs[0].appendChild(draggableBlock)
}

function addDragListeners(el) {
  el.addEventListener("dragstart", (event) => {
    console.log("dragstart")
    //event.dataTransfer.setData("text/html", event.target)
    draggableBlock.classList.add(CLASS_DRAGGED)
  })

  el.addEventListener("dragenter", (event) => {
    console.log("dragenter")
    //draggableBlock.classList.add(CLASS_DRAGGED)
  })

  el.addEventListener("dragleave", (event) => {
    console.log("dragleave")
    event.target.classList.remove(CLASS_DRAGOVER)
  })

  el.addEventListener("dragover", (event) => {
    console.log("dragover")
    event.preventDefault()
    event.target.classList.add(CLASS_DRAGOVER)
  })

  el.addEventListener("dragend", (event) => {
    console.log("dragend")
    draggableBlock.classList.remove(CLASS_DRAGGED)
    Array.from(emptyDivs).forEach(div => div.classList.remove(CLASS_DRAGOVER))
  })

  el.addEventListener("drop", (event) => {
    console.log("drop")
    if ([...event.target.classList].includes(CLASS_EMPTY)) {
      draggableBlock.parentNode.removeChild(draggableBlock)
      el.appendChild(draggableBlock)
    }
  })
}
