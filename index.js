import CharacterCard from "./components/CharacterCard/CharacterCard.js";

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


async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch {
    console.log("API Fehler");
  }
}

const allCharacters = await getCharacters();
console.log(allCharacters);

allCharacters.forEach((character) => {
  const newCharacter = CharacterCard(character);
  cardContainer.appendChild(newCharacter);
});
