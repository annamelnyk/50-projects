"use strict"

const MENU_OPEN = "menu-open"
const HIDE_MENU_ICON = "hide-menu-icon"
const openMenu = document.getElementById("menu")
const closeMenu = document.getElementById("close")
const containerOuter = document.getElementById("container-outer")
const menuNav = document.getElementById("menu-nav")

openMenu.addEventListener("click", () => {
  containerOuter.classList.add(MENU_OPEN)
})


closeMenu.addEventListener("click", () => {
  containerOuter.classList.remove(MENU_OPEN)
})