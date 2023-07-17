import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const url = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      console.log(result);

      const characters = result.results;
      console.log(characters);

      characters.forEach((character) => {
        const name = character.name;
        const status = character.status;
        const type = character.type;
        const occurences = character.episode.length;

        const card = createCharacterCard(name, status, type, occurences);
        cardContainer.appendChild(card);
      });
    } else {
      console.log("fehler");
    }
  } catch (error) {
    return "Fehler", error;
  }
}

fetchCharacters();
