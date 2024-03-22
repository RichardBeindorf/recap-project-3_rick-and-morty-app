export default function NavPagination(page, maxPage) {
  const pagination = document.querySelector('[data-js="pagination"]');

  pagination.innerText = `${page} / ${maxPage}`;
}
