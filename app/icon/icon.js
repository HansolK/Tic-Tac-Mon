const icons = {
  pikachu: {
    source: 'https://vignette.wikia.nocookie.net/poohadventures/images/a/a0/EiMArL4yT.png/revision/latest?cb=20150906014901',
    name: "Pikachu"
  },
  charmander: {
    source: 'https://qph.fs.quoracdn.net/main-qimg-b608148d94f84b2c8a4ac7ab49ab8bb5',
    name: "Charmander"
  },
  bulbasaur: {
    source: 'http://static.pokemonpets.com/images/monsters-images-800-800/1-Bulbasaur.png',
    name: "Bulbasaur"
  },
  togepi: {
    source: 'http://static.pokemonpets.com/images/monsters-images-300-300/175-Togepi.png',
    name: "Togepi"
  },
  squirtle: {
    source: 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891764-007squirtle.png',
    name: "Squirtle"
  },
  butterfree: {
    source: 'https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/d/d1/Butterfree_Based_On.png/revision/latest?cb=20161115064309',
    name: "Butterfree"
  },
  eevee: {
    source: 'https://cdn140.picsart.com/273435552014211.png?r1024x1024',
    name: "Eevee"
  },
  jigglypuff: {
    source: 'https://vignette.wikia.nocookie.net/owen-and-david-playing-pokemon-tower-defense/images/d/dd/Rick.png/revision/latest?cb=20150510062243',
    name: "Jigglypuff"
  }
}

function popUpModal(callback) {
  const modal = document.querySelector(".icon-modal")
  modal.innerHTML = "";
  modal.classList.add("icon-modal-show")

  const keys = Object.keys(icons)
  
  for(let i = 0; i < keys.length; i++) {
    const icon = icons[keys[i]]
    const imageContainer = document.createElement("div")
    const image = document.createElement("img")
    modal.appendChild(imageContainer)
    imageContainer.appendChild(image)
    image.setAttribute("src", icon.source)

    imageContainer.addEventListener('click', function() {
      modal.innerHTML = "";
      callback(keys[i])
    })
  }

}

// popUpModal(function(imageclicked) {
// //set the game image into the player character
// }
// )