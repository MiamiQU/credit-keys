function searchCreditTerm() {
  const searchInput = document.getElementById("searchInput").value;
  const apiURL = `https://swapi.dev/api/people/?search=${searchInput}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const character = data.results[0];
      const creditTermTitle = document.getElementById("creditTermTitle");
      const creditTermDefinition = document.getElementById(
        "creditTermDefinition"
      );
      const starWarsCharacter = document.getElementById("starWarsCharacter");

      // Update the credit term and definition in the DOM
      creditTermTitle.textContent = searchInput;
      creditTermDefinition.textContent =
        "Definition: Insert definition here (from SWAPI)";

      // Use the character's name to construct the URL for the character image
      const characterName = character.name.toLowerCase().replace(/\s/g, "-");
      starWarsCharacter.src = `https://starwars-visualguide.com/assets/img/characters/${characterName}.jpg`;
    })
    .catch((error) => console.log(error));
}
