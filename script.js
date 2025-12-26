// ================= SLIDER =================
let sliderEl = document.querySelector("#slider")
let count = 0
let intervalId

let moveSlider = () => {
  count++
  if (count > 2) count = 0
  sliderEl.style.cssText = `transform: translateX(-${count * 100}%);`
}

let startSlider = () => (intervalId = setInterval(moveSlider, 2000))
let stopSlider = () => clearInterval(intervalId)

sliderEl.addEventListener("mouseenter", stopSlider)
sliderEl.addEventListener("mouseleave", startSlider)
startSlider()

// ================= SEARCH FILTER =================
const searchInput = document.querySelector("#search")
const productCards = document.querySelectorAll("#product > div")

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase()
  productCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase()
    if (title.includes(searchValue)) {
      card.classList.remove("hidden")
    } else {
      card.classList.add("hidden")
    }
  })
})
