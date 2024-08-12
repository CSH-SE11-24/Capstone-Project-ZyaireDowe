console.log("scriptRunning")

let label = document.querySelector("#dog")
console.log(label)
label.addEventListener("mouseover", function(e) {
  label.src="https://the3df.b-cdn.net/wp-content/uploads/2019/10/mogo-zoo-animal-kingdom.gif"
})
let hi = document.querySelector("#hi")
console.log(hi)
hi.addEventListener("click", function(e) {
  hi.textContent="My website is..."
})