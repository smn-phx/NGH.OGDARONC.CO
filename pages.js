// this is the data for holdin which page we're on
let pageNumber = 0

// content
const pages = [

  { copy: "this is a shout", backgound:"#ece8d9", circle:"#f7b71d" },
  { copy: "this is a scream", backgound:"#323edd", circle:"#bbe1fa"},
  { copy: "this is a conversation with forces unseen.", backgound:"#6c5b7b", circle:"#919190"},
  { copy: "this is a waking dream, an oft repeated scene.", backgound:"#e9290f", circle:"#ff6107"},
  { copy: "this is a looping beat, a looped beating.", backgound:"#162447", circle:"#dddddd"},
  { copy: "the day the taste of your own blood becomes as familiar as your teeth is the day the cheek stops turning.", backgound:"#445c3c", circle:"#c93838"},
  { copy: '<a href="https://www.ogdaronc.co"> c/o smn_phx </a>', backgound:"#f6d743", circle:"#708160"},

]

// relevant tags
const tag = document.querySelector("h2")
const nextTag = document.querySelector("footer img.next")
const outputTag = document.querySelector("h2")
const previousTag = document.querySelector("footer img.prev")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

// next function
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()

}

// previous function
const previous = function() {

  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()

}

// this updates the sections content and style
const updateSection = function() {
  outputTag.innerHTML = pages [pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].backgound
}


// on click of nextTag, run this
nextTag.addEventListener("click", function() {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener("click", function() {
  previous()
})
