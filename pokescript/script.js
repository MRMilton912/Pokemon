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

pokemonList.forEach(function (item){
  document.write (item.name +  "(height: "+item.height+")" + "(type: "+item.type+")" )
});

//pokemonList.forEach(function(pokemon)
//console.log(Pokemon.name + "(height: "+Pokemon.height+")" + "(type: "+Pokemon.type+")" )

function getAll (){
  return pokemonList;
}
function add (pokemon) {
  pokemonList.push(pokemon)
}

return {
  getAll: getAll,
  add: add
}



})()

console.log(pokeDex.getAll())
