const gamePage = document.querySelector(".game-page");

let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function startGame(player1, player2) {
  const game = {
    player1: player1,
    player2: player2,
    turn: 1
  };
  playerdisplay(player1);
  createTable(game);
  playerdisplay(player2);
}

function createTable(game) {
  const table = document.createElement("table");
  gamePage.appendChild(table);
  const tablebody = document.createElement("tbody");
  table.appendChild(tablebody);

  for (let i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      var data = document.createElement("td");
      var clickImage = document.createElement("img");
      row.appendChild(data);
      data.appendChild(clickImage);
    }
    tablebody.appendChild(row);
  }

  gamePage.classList.add("game-page-show");

  const cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(event) {
      if (game.turn === 1) {
        game.player1.clicked.push(i);
        if (clickCell(event, game.player1) === null) {
          return (game.turn = 1);
        }
        return (game.turn = 2);
      } else {
        game.player2.clicked.push(i);
        if (clickCell(event, game.player2) === null) {
          return (game.turn = 2);
        }
        return (game.turn = 1);
      }
    });
  }
}

function playerdisplay(player) {
  var playerContainer = document.createElement("div");
  playerContainer.classList.add("display-div");
  var playerContent = document.createElement("div");
  var playerImage = document.createElement("img");
  playerImage.classList.add("player-image");
  playerImage.setAttribute("src", window.icons.getIconSource(player.image));
  playerContainer.appendChild(playerContent);
  playerContainer.appendChild(playerImage);
  gamePage.appendChild(playerContainer);
  playerContent.textContent = "player " + player.playerNum + ": " + player.name;
}


let numberOfClicks = 0;
function clickCell(event, player) {
  let eachCellPic = event.target.querySelector("img");
  if (eachCellPic !== null) {
    numberOfClicks += 1;
    eachCellPic.setAttribute("src", window.icons.getIconSource(player.image));
    eachCellPic.classList.add("cell-image");
  } else {
    return null;
  }

  for (let i = 0; i < winningCombination.length; i++) {
    let winCount = 0;
    for (let j = 0; j < winningCombination[i].length; j++) {
      if (player.clicked.includes(winningCombination[i][j])) {
        const winnerDisplay = document.querySelector(".modal--winner");
        const displayContent = winnerDisplay.querySelector(".modal-body");
        winCount += 1;
        if (winCount === 3) {
          winnerDisplay.classList.add("modal-show");
          displayContent.textContent = `Winner is: ${player.name}`;
          return
        } 
        if (numberOfClicks === 9 && winCount < 3) {
          winnerDisplay.classList.add("modal-show");
          displayContent.textContent = `You are tie`;
        }
      }
    }
  }
}

window.startGame = startGame;
