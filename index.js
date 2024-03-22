import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import NavPagination from "./components/NavPagination/NavPagination.js";

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
const searchQuery = "";

console.log("Start Page:", page);

async function getCharacters(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch {
    console.log("API Fehler");
  }
}

const allCharacters = await getCharacters();
console.log(allCharacters);

// getCharacter. info
const pages = allCharacters.info;

allCharacters.results.forEach((character) => {
  const newCharacter = CharacterCard(character);
  cardContainer.appendChild(newCharacter);
});

// By adding the string ?page=<pageIndex> to the end of the fetch URL, you can receive the respective page of characters.

nextButton.addEventListener("click", () => {
  page++;
  maxPage = pages.pages;
  console.log("Event Next Button:", pages);
  const initialPage = 1;

  return NavPagination(page, maxPage);
});

function newPage() {
  return page + 1;
}
