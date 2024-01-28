"use strict"

import PromptSync from "prompt-sync"
import { default as movieCards } from "./movieObject.js"

movieCards
const prompt = PromptSync()

let validation = false

// Instantiating Class
class Movie {
  // Attributes
  orderedMovie

  // Methods
  // Display Recommended movies
  recommendedMovie(movieCard) {
    let randomNumber = Math.floor(Math.random() * movieCard.length)
    console.log(
      `\nCheck out our recommended movie: \nMovie: ${movieCard[randomNumber].movieName} \nRating: ${movieCard[randomNumber].rating} \nGenre: ${movieCard[randomNumber].genre}`
    )
  }
  // Display Genre List
  getMovieGenre(movieCard) {
    let genreArray = []
    let count = 1
    console.log("\nSelect the Movie Genre of your choice: ")
    for (let i = 0; i < movieCard.length; i++) {
      if (!genreArray.includes(movieCard[i].genre)) {
        genreArray.push(movieCard[i].genre)
        console.log(`${count}) ${genreArray[i]}`)
        count++
      }
    }
    return genreArray
  }
  // Genre selection logic
  selectionMenu(movieCards) {
    const genre = this.getMovieGenre(movieCards)
    let option = prompt("Option: ")
    switch (option) {
      case "1":
        this.provideDetail(option, movieCards, genre)
        break
      case "2":
        this.provideDetail(option, movieCards, genre)
        break
      case "3":
        this.provideDetail(option, movieCards, genre)
        break
      case "4":
        this.provideDetail(option, movieCards, genre)
        break
      case "5":
        this.provideDetail(option, movieCards, genre)
        break

      default:
        console.log("Invalid Option !!")
        signature = true
        this.validate(movieCards)
        break
    }
  }
  // Logic for storing selected genre movies
  provideDetail(option, movieCards, genre) {
    let selectedMovies = []
    option = Number(option)
    option -= 1
    for (let i = 0; i < movieCards.length; i++) {
      if (movieCards[i].genre == genre[option]) {
        selectedMovies.push(movieCards[i])
      }
    }
    this.displayMovieGenre(selectedMovies, genre[option])
  }
  // Display movies of the same genre
  displayMovieGenre(selectedMovies, selectedGenre) {
    let selectedMovie = selectedMovies
    let count = 0
    console.log(`\nList of ${selectedGenre} movies`)
    for (let i = 0; i < selectedMovie.length; i++) {
      count++
      console.log(
        `${count}) Movie: ${selectedMovie[i].movieName} | Year: ${selectedMovie[i].year} |`
      )
      console.log(`   Movie Rating: ${selectedMovie[i].rating} |`)
      console.log("------------------------")
    }
    this.selectMovie(selectedMovies)
  }
  // Choose movie from genre list
  selectMovie(selectedMovies) {
    let option = prompt("\nSelect Movie Option: ")
    option = Number(option)
    option -= 1
    if (option < selectedMovies.length && option >= 0) {
      for (let i = 0; i < movieCards.length; i++) {
        if (movieCards[i].movieId == selectedMovies[option].movieId) {
          this.displayMovieCard(movieCards[i])
        }
      }
    } else {
      console.log("\ninvalid Option !!")
      this.selectMovie(selectedMovies)
    }
  }
  // Display selected movie detail
  displayMovieCard(movieCard) {
    console.log("\n--- Movie Detail ---\n")
    console.log(`Name: ${movieCard.movieName}`)
    console.log(`Genre: ${movieCard.genre}`)
    console.log(`Year: ${movieCard.year}`)
    console.log(`Rating: ${movieCard.rating}`)
    console.log(`Runtime: ${movieCard.runtime}`)
    console.log(`Info: ${movieCard.info}`)

    console.log("------------------------\n")
    this.orderedMovie = movieCard
  }
  // Checkout section
  closingPrompt() {
    console.log(
      "Press X to rent the movie, press Y to go back to main menu, press Z to exit app"
    )

    let option = prompt("Option: ")
    option = option.toUpperCase()
    switch (option) {
      case "X":
        console.log("\nMovie Rented")
        this.order()
        break
      case "Y":
        this.restartApp()
        break
      case "Z":
        this.closeApp()
        break

      default:
        console.log("\nInvalid Option !!")
        this.closingPrompt()
        break
    }
  }

  validate(movieCards) {
    if (validation == true) {
      validation = false
      this.selectionMenu(movieCards)
    }
  }
  // Order method
  order() {
    let dueDate = Math.floor(Math.random() * 50 + 1)
    console.log("\n---Receipt---\n")
    console.log(`Your have rented ${this.orderedMovie.movieName}.`)
    console.log(`Due date: ${dueDate} days.`)

    this.closeApp()
  }
  // Exit method
  closeApp() {
    console.log("\nThank you for using the app")
    return 0
  }
  // Restart method
  restartApp() {
    console.log("\nMain Menu")
    runProgram()
  }
}

// New Object
const movie = new Movie()

// Main program function
function runProgram() {
  console.log("\nWelcome to the Mereson Movie Platform")

  movie.recommendedMovie(movieCards)
  movie.selectionMenu(movieCards)
  movie.closingPrompt()
}

runProgram()
