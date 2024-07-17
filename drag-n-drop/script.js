"use strict"

const main = document.querySelector(".main")

createDraggableBlocks()

function createDraggableBlocks() {
  for (let i = 0; i < 5; i++) {
    const block = document.createElement("div")
    block.classList.add('block')
    block.setAttribute('draggable', true)
    main.appendChild(block)
    addDragListeners(block)
  }
}

function addDragListeners(el) {
  el.addEventListener("dragstart", event => {
    console.log('dragstart')
    event.dataTransfer.setData("text/plain", "This text may be dragged")
  });
}
