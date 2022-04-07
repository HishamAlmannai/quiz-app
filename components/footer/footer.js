export default function Footer(curry) {
  /*
    const wurste = document.querySelectorAll('[data-js="mainPage"]');

    curry.addEventListener("click", ()=> {
    console.log(curry);
    console.log(wurste);

});
*/

  const buttonH = document.querySelector('[data-js="navButtonHome"]');
  const buttonB = document.querySelector('[data-js="navButtonBookmark"]');
  const buttonC = document.querySelector('[data-js="navButtonCreate"]');
  const buttonP = document.querySelector('[data-js="navButtonProfile"]');

  const pageH = document.querySelector('[data-js="Home"]');
  const pageB = document.querySelector('[data-js="Bookmark"]');
  const pageC = document.querySelector('[data-js="Create"]');
  const pageP = document.querySelector('[data-js="Profile"]');

  buttonH.addEventListener('click', () => {
    pageH.classList.remove('hidden');
    pageB.classList.add('hidden');
    pageC.classList.add('hidden');
    pageP.classList.add('hidden');
  });

  buttonB.addEventListener('click', () => {
    pageH.classList.add('hidden');
    pageB.classList.remove('hidden');
    pageC.classList.add('hidden');
    pageP.classList.add('hidden');
  });

  buttonC.addEventListener('click', () => {
    pageH.classList.add('hidden');
    pageB.classList.add('hidden');
    pageC.classList.remove('hidden');
    pageP.classList.add('hidden');
  });

  buttonP.addEventListener('click', () => {
    pageH.classList.add('hidden');
    pageB.classList.add('hidden');
    pageC.classList.add('hidden');
    pageP.classList.remove('hidden');
  });
}
