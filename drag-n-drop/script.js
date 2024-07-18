"use strict"

const main = document.querySelector(".main")
let emptyDivs

createDraggableBlocks()

function createDraggableBlocks() {
  for (let i = 0; i < 5; i++) {
    const empty = document.createElement("div")
    empty.classList.add('empty')
    main.appendChild(empty)
    addDragListeners(empty)
  }

  emptyDivs = document.querySelectorAll('.empty')
  const block = document.createElement("div")
  block.classList.add('block')
  block.setAttribute('draggable', true)
  emptyDivs[0].appendChild(block)
}


function addDragListeners(el) {
  el.addEventListener("dragstart", event => {
    console.log('dragstart')
    console.log(event)
    event.dataTransfer.setData("text/html", event.target);
  });

  el.addEventListener('dragenter', event => {
    console.log('dragenter')
  });

  el.addEventListener('dragleave', event => {
    console.log('dragleave')
  });

  el.addEventListener('dragend', event => {
    console.log('dragend')
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  });

  el.addEventListener('drop', event => {

    event.preventDefault();
  if (event.target.className === "empty") {
    //dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  })
}
