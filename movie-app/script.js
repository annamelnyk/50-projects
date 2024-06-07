"use strict"

// MOVIE API https://developer.themoviedb.org/reference/movie-popular-list

const main = document.querySelector(".main")
const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmMwOWE4ZTAxMmFkYzFhYjA5YTYzMWM2NGRkYTQ0ZCIsInN1YiI6IjY2NjE0OGYxYmNmYzMyYWMwOTRmOThjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLV5fh0jFlJhKXStX4XhgObmeOn90DBUTWd5-5eORSU"
const imageSrc = `https://image.tmdb.org/t/p/w500`

getMovies(generateMovieItem)

function getMovies(renderData) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`
    }
  }

  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response.results)
      response.results.forEach(renderData)
    })
    .catch((err) => console.error(err))
}

function generateMovieItem(movie) {
  const item = document.createElement("div")
  item.classList.add("item")

  const itemPoster = document.createElement("div")
  itemPoster.classList.add("item-poster")
  item.appendChild(itemPoster)

  const itemImg = document.createElement("img")
  itemImg.classList.add("item-img")
  itemImg.setAttribute("src", `${imageSrc}${movie.poster_path}`)
  itemPoster.appendChild(itemImg)

  const itemInfo = document.createElement("div")
  itemInfo.classList.add("item-info")
  item.appendChild(itemInfo)

  const itemName = document.createElement("div")
  itemName.classList.add("item-name")
  itemName.textContent = movie.title
  itemInfo.appendChild(itemName)

  const itemRating = document.createElement("span")
  itemRating.classList.add("item-rating")
  itemRating.textContent = Number(movie.vote_average).toFixed(1)
  itemRating.classList.add(getRatingCLass(Number(movie.vote_average)))
  itemInfo.appendChild(itemRating)

  const itemOverview = document.createElement("div")
  itemOverview.classList.add("item-overview")
  itemOverview.textContent = movie.overview
  item.appendChild(itemOverview)

  main.appendChild(item)
}

function getRatingCLass(rating) {
  if (rating <= 5) {
    return "low"
  }

  if (rating > 5 && rating <= 8) {
    return "average"
  }

  if (rating > 8) return "high"
}

