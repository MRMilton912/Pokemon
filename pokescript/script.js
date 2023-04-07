let pokeDex = (function () {
  let pokemonList = [];
  let pokeweb = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');
  let container = document.querySelector('#image-container');/*Class*/

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      "name" in pokemon &&
      "detailsUrl" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('Invalid Pokémon');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("poke-button");
    button.addEventListener('click', function (event) { showDetails(pokemon) });
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  function loadList() {
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
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    loadDetails(item).then(function () { /*open Modal*/
      showModal(item);/*pokemon*/
    });
  }

  /*Modal*/

  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');

    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");
  
    modalTitle.empty();
    modalBody.empty();
  
    /*Close modal?*/
  
    let nameElement = $("<h1>" + pokemon.name + "</h1>")
    let imageElement = $('<img class="modal-img" style="width:50%">'); /*Image*/
    imageElement.attr("src", pokemon.imageUrl)
    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
    let typeElement = $("<p>" + "type : " + pokemon.type + "</p>");

    let myImage = document.createElement('img');
    myImage.src = pokemon.imageUrl;

    imgContainer.appendChild(myImage); /*Image?*/

    modalTitle.append(nameElement); /*Bootstrap-Name-Title*/
    modalBody.append(imageElement); /*Image*/
    modalBody.append(typeElement);
    modalBody.append(heightElement);

    /**/

    modal.appendChild(closeButtonElement); /*close Modal*/
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible'); /*Container*/
  }

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container'); /*Hide modal*/
    modalContainer.classList.remove('is-visible');
  }

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) { hideModal(); }
  });/*Modal*/

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    showDetails: showDetails
  };
})(); /*IIFE*/


pokeDex.loadList().then(function () {
  pokeDex.getAll().forEach(function (pokemon) {
    pokeDex.addListItem(pokemon);
  });
})

/**/