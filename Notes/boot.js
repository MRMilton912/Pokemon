function showModal(pokemon) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  let modalHeader = $(".modal-header");

  modalTitle.empty();
  modalBody.empty();

  /**Close modal?**/

  let nameElement = $("<h1>" + pokemon.name + "</h1>")
  let imageElement = $('<img class="modal-img" style="width:50%">');
  imageElement.attr("src", pokemon.imageUrl)
  let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
  let typeElement = $("<p>" + "type : " + pokemon.type + "</p>");

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(typeElement);
}

/**Data target**/