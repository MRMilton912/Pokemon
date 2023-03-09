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

for (let i = 0; i < pokemonList.length; i++){
  console.log(pokemonList)

let Pokemon = pokemonList[i];
document.write (Pokemon.name + "(height: "+Pokemon.height+")" + "(type: "+Pokemon.type+")" )

if (Pokemon.height >= 1){
  document.write("That's a BIG Pokemon!")
} 
}