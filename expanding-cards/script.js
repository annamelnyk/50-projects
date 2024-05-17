"use strict"

const cards = document.getElementById("cards")

cards.addEventListener("click", (e) => {
  const card = event.target
  const allCards = [...card.parentElement.children]

  allCards.map((c) => c.classList.remove("expanded"))
  card.classList.add("expanded")
})
