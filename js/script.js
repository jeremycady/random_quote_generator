/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Help me, Obi-Wan Kenobi. You’re my only hope.",
    source: "Leia Organa",
    year: "1977",
    citation: "Stars Wars Episode IV: A New Hope",
    tag: ['Light Side', 'Original Trilogy'],
  },
  {
    quote: "I find your lack of faith disturbing.",
    source: "Darth Vader",
    year: "1977",
    citation: "Stars Wars Episode IV: A New Hope",
    tag: ['Dark Side', 'Original Trilogy'],
  },
  {
    quote: "Never tell me the odds!",
    source: "Han Solo",
    year: "1980",
    citation: "Stars Wars Episode V: The Empire Strikes Back",
    tag: ['Light Side', 'Original Trilogy'],
  },
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    year: "1980",
    citation: "Stars Wars Episode V: The Empire Strikes Back",
    tag: ['Light Side', 'Original Trilogy'],
  },
  {
    quote: "There’s always a bigger fish.",
    source: "Qui-Gon Jinn",
    year: "1999",
    citation: "Stars Wars Episode I: The Phantom Menace",
    tag: ['Light Side', 'Prequels'],
  },
]

/***
 * variable for starting the printQuote interval
***/
let printInterval;


/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  const quote = `
  <p class="quote">${quotes[randomNumber].quote}</p>
  <p class="source">${quotes[randomNumber].source}<span class="citation">${quotes[randomNumber].citation}</span><span class="year">${quotes[randomNumber].year}</span><br /><span>Tags: ${quotes[randomNumber].tag.join(', ')}</span></p>
  `
  return quote
}

/***
 * `getRandomColor` function
***/

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  const color = `rgb(${red},${green},${blue},1)`
  return color
}

/***
 * `printQuote` function
***/
const printQuote = () => {
  const quoteBox = document.querySelector("#quote-box")
  const bodyTag = document.body
  const html = getRandomQuote()
  const color = getRandomColor()
  quoteBox.innerHTML = html
  bodyTag.style.backgroundColor = color;
  if (printInterval) {
    clearInterval(printInterval)
  }
  setPrintInterval()
}

/***
 * `startInterval` function
***/

const setPrintInterval = () => {
  printInterval = setInterval(printQuote,5000)
}

printQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);