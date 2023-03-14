let pokeDex = (function () {
  let pokemonList = [];
  let pokeweb = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon){ 
    if (
      typeof pokemon === 'object' &&
      "name" in pokemon &&
      "detailsUrl" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('Invalid Pokémon');
    }}

  function getAll () {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("poke-button");
    button.addEventListener('click', function(event) {showDetails(pokemon)});
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  function loadList(){
    return fetch(pokeweb).then(function (response) {
      return response.json()
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails (item) {
    pokeDex.loadDetails(item).then(function ()
    {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();

  pokeDex.loadList().then(function() {
    pokeDex.getAll().forEach(function (pokemon) {
      pokeDex.addListItem(pokemon);
    });
  });