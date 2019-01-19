const [player1input, player2input] = document.querySelectorAll(".player input")
const playBtn = document.querySelector(".play-btn")
const charBtn = document.querySelectorAll(".player button")

function play() {
  if(player1input.value === "" && player2input.value === "") {
    alert("PUT NAMES!")
    return
  } else if(player1input.value === "" || player2input.value === "") {
    alert("YOU BOTH NEED NAMES")
    return
  } 

  
}


playBtn.addEventListener('click', play)

let playerOneImage
let playerTwoImage

for(let i = 0; i < charBtn.length; i++) {
  charBtn[i].addEventListener('click', function(){
    icons.chooseIcon(function(key) {
    charBtn[i].textContent = ""
    const character = document.createElement("img")
    character.setAttribute("src", icons.getIconSource(key))
    charBtn[i].appendChild(character)
      if(i === 0) {
        playerOneImage = key
      } else {
        playerTwoImage = key
      }
    })
  })
}
