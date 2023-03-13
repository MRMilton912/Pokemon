let pokeDex = (function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      type: ["grass", "poison"]},
    {
      name: "Squirtle",
      height: 0.5,
      type: ["water"]},
    {
      name: "Pikachu",
      height: 0.4,
      type: ["electric"]},
    {
      name: "Charizard",
      height: 1.7,
      type: ["fire"]}
  ];

  //pokemonList.forEach(function (item){
  //document.write (item.name +  "(height: "+item.height+")" + "(type: "+item.type+")" )});
  //pokemonList.forEach(function(pokemon)
  //console.log(Pokemon.name + "(height: "+Pokemon.height+")" + "(type: "+Pokemon.type+")" )

  function getAll (){
    return pokemonList;
  }
  function add (pokemon) {
    pokemonList.push(pokemon)
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("poke-button");
    button.addEventListener('click', function(event) {console.log(event)});
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };

  })()

  console.log(pokeDex.getAll());
  pokeDex.add({ 
    name: "Onix",
    height: 8.8,
    type: ["rock"]
  });

  pokeDex.getAll().forEach(function(pokemon) {
    pokeDex.addListItem(pokemon)

  });

  showDetails (pokemon); {
    console.log (pokemon)
  };