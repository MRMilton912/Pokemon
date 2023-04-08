function showModal(pokemon) {
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
  }); /**Close modal* */


  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let name = document.createElement('p');
  name.innerText = 'Name: ' + pokemon.name;

  let type = document.createElement('p');
  type.innerText = 'Type: ' + pokemon.types[0].type.name;

  let imgContainer = document.createElement('div')
  imgContainer.id = 'image-container';

  let myImage = document.createElement('img');
  myImage.src = pokemon.imageUrl;

  imgContainer.appendChild(myImage);

  modal.append(closeButtonElement); /*close Button for Modal*/
  modal.appendChild(closeButtonElement); /**close Modal**/
  modal.appendChild(titleElement);
  modal.appendChild(name);
  modal.appendChild(type);
  modal.appendChild(imgContainer);
  
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
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