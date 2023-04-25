let pokeDex = (function () {
  let pokemonList = [];
  let pokeweb = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  let container = document.querySelector('#image-container');

// Create an <img> element
let myImage = document.createElement('img');

// setting `src` property to set the actual element's `src` attribute
// this also works on <img> elements selected by querySelector() method, it is not specific for <img> elements created with createElement() methods
myImage.src = 'https://picsum.photos/300/300';

container.appendChild(myImage);
})(); 