export default function CharacterCard({ image, name, status, type, episode }) {
  const cardContainer = document.querySelector('[data-js="card-container"]');
  const liCard = document.createElement("li");
  liCard.setAttribute("data-js", "card");
  liCard.classList.add("card");
  liCard.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src=${image}
              alt=${name}
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${episode.length}</dd>
            </dl>
          </div>
    `;

  return liCard;
}
