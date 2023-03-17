let pokeDex = (function () {
  let pokemonList = [];
  let pokeweb = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');
  let container = document.querySelector('#image-container');

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
    loadDetails(item).then(function () {
      showModal(item);
    });
  }

  /*Modal*/

  function showModal(title, text) {
    let modalContainer = document.querySelector('#modal-container');

    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });


    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let container = document.querySelector('#image-container');

    let myImage = document.createElement('img');
    myImage.src = '';


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
    container.appendChild(myImage);
  }

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) { hideModal(); }
  });/**Modal*/

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