export default function Bookmark(buttonHTML) {
  const bookmarkT = buttonHTML.querySelector(
    '[data-js="bookmark__icon--true"]'
  );
  const bookmarkF = buttonHTML.querySelector(
    '[data-js="bookmark__icon--false"]'
  );

  buttonHTML.addEventListener('click', () => {
    bookmarkT.classList.toggle('hidden');
    bookmarkF.classList.toggle('hidden');
  });
}
