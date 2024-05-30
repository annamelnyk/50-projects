"use strict"

const CLASS_EXPANDED = "expanded"
const container = document.querySelector(".container")

container.onclick =  (e) => {
  const target = e.target;

  if (target.nodeName !== 'I') return

  const section = target.closest('section');

  if (section.classList.contains(CLASS_EXPANDED)) {
    section.classList.remove(CLASS_EXPANDED)
    target.classList.remove('fa-square-xmark')
    target.classList.add('fa-angle-down')
  } else {
    section.classList.add(CLASS_EXPANDED)
    target.classList.remove('fa-angle-down')
    target.classList.add('fa-square-xmark')
  }
}
