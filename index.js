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
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function getCharacters(query = "") {
  try {
    let url = "https://rickandmortyapi.com/api/character/";
    if (query) {
      url += `?name=${encodeURIComponent(query)}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("API Fehler:");
  }
}

function displayCharacters(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const newCharacter = CharacterCard(character);
    cardContainer.appendChild(newCharacter);
  });
}

searchBar.addEventListener("submit", async (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  const characters = await getCharacters(searchQuery);
  displayCharacters(characters);
});

getCharacters().then(displayCharacters);
