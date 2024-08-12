let labelButtons = document.querySelectorAll("input")
console.log(labelButtons)

let label = document.querySelectorAll("label")
console.log(label)
let answer = ["Pacific Ocean", "Berlin", "all black with white strips"]
for (let i = 0; i < labelButtons.length; i++) {
  let question = Math.floor(i / 3)
  
  // i selected all the correct answer choices out of the 3 
  labelButtons[i].addEventListener("click", function(e) {
    for (let j = 0; j < labelButtons.length; j++) {
      label[j].style.color = "black"

    }
    if (labelButtons[i].value == answer[question]) {
      label[i].style.color = "green"
    } else {
      label[i].style.color = "red"
    }
  })
}
// if you choose the wromng answer red font will appear if you choose gthge right one a green one will appear 