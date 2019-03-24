const [player1input, player2input] = document.querySelectorAll(".player input");
const playBtn = document.querySelector(".play-btn");
const charBtn = document.querySelectorAll(".player button");

const loginPage = document.querySelector('.login-page')

let playerOneImage;
let playerTwoImage;

for (let i = 0; i < charBtn.length; i++) {
  charBtn[i].addEventListener("click", function() {
    window.icons.chooseIcon(function(key) {
      console.log(key)
    
      
      if (i === 0) {
        if(key === playerTwoImage) {
          alert("Choose different image")
          return
        }
        playerOneImage = key;
      } else {
        if(key === playerOneImage) {
          alert("Choose different image")
          return
        }
        playerTwoImage = key;
      }
      charBtn[i].textContent = "";
      const character = document.createElement("img");
      character.setAttribute("src", window.icons.getIconSource(key));
      charBtn[i].appendChild(character);
      
    });
  });
}

function play() {
  if (player1input.value === "" && player2input.value === "") {
    alert("PUT NAMES!");
    return;
  } else if (player1input.value === "" || player2input.value === "") {
    alert("YOU BOTH NEED NAMES");
    return;
  }

  if(playerOneImage === undefined || playerTwoImage === undefined){
    alert("choose an image to play")
    return
  }

  loginPage.classList.add("hidden")  
  
  const player1 = {
    name: player1input.value,
    playerNum: 1,
    image: playerOneImage,
    clicked: []
  }

  const player2 = {
    name: player2input.value,
    playerNum: 2,
    image: playerTwoImage,
    clicked: []
  }

  window.startGame(player1, player2)

}


playBtn.addEventListener("click", play);


