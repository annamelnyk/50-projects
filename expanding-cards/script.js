"use strict"

const CARDS_CONTAINER = "cards"
const CARD_EXPANDED = "expanded"
const HEADING_VISIBLE = "show"
const cards = document.getElementById(CARDS_CONTAINER)

cards.addEventListener("click", (event) => {
  if (event.target.tagName !== "DIV") return
  const card = event.target

  if (containsClassName(card, CARD_EXPANDED)) return
  const allCards = [...card.parentElement.children]

  allCards.map((c) => {
    removeClass(c, CARD_EXPANDED)
    removeClass(c.children[0], HEADING_VISIBLE)
  })

  addClass(card, CARD_EXPANDED)

  setTimeout(() => {
    const heading = card.children[0]

    containsClassName(heading, HEADING_VISIBLE)
      ? removeClass(heading, HEADING_VISIBLE)
      : addClass(heading, HEADING_VISIBLE)
  }, 0.5)
})

function containsClassName(element, className) {
  return element.className.includes(className)
}

function addClass(element, className) {
  element.classList.add(className)
}

function removeClass(element, className) {
  element.classList.remove(className)
}
