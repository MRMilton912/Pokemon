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
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList
  };

})();

  console.log(pokeDex.getAll());

  pokeDex.loadList().then(function() {
    pokeDex.getAll().forEach(function (pokemon) {
      pokeDex.addListItem(pokemon);
    });
  });