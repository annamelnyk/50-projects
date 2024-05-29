"use strict"

const button = document.querySelector(".button")
const joke = document.querySelector(".joke-text")

window.addEventListener("load", getJoke)
button.addEventListener("click", getJoke)

async function getJoke() {
  try {
    const resp = await fetch("https://icanhazdadjoke.com/slack", {
      headers: {
        Accept: "application/json"
      }
    })
    const jokeResp = await resp.json()

    joke.textContent = jokeResp.attachments[0].text
  } catch (err) {
    console.error(err.message)
  }
}
