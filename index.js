import Footer from './components/footer/footer.js';
import Card from './components/card/card.js';
import Create from './components/create/create.js';
import Profile from './components/profile/profile.js';
import Bookmark from './components/bookmark/bookmark.js';
import { cardData } from './components/carddata.js';

cardData.forEach(({ id, isBookmarked, question, answer, tags }) => {
  const maiN = document.querySelector('main');
  const articlE = document.createElement('article');
  const tagList = document.createElement('ul');
  tags.forEach(taG => {
    console.log(taG);
    const item = document.createElement('li');
    item.classList.add('card__list-item');
    item.innerHTML = 'taG';
    tagList.append(item);
  });

  articlE.classList.add('card');
  //articlE.dataset.data-js="card";
  articlE.innerHTML = ` 
        <h2>Question</h2>
        <section>
          <p>${question} </p>
        </section>
        <button class="AnswerButton" data-js="AnswerButton">Show Answer</button>
        <section class="hidden" data-js="AnswerSection">
          <p>${answer}</p>
        </section>

        <section>
        ${tagList}
          
        </section>
        <button class="bookmark button__bookmark" data-js="bookmark__button">
          <svg class="icon__medium" data-js="bookmark__icon--false" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
          </svg>
          <svg class="icon__medium hidden" data-js="bookmark__icon--true" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
          </svg>
        </button>
        `;
  maiN.append(articlE);
});

cardData.forEach(carD => {
  Card(carD);
});

const footeR = document.querySelector('footer');
Footer();
const navButtonS = document.querySelectorAll('[data-js="navButton"]');

const bookmarkS = document.querySelectorAll('[data-js="bookmark__button"]');
bookmarkS.forEach(bookmarK => {
  Bookmark(bookmarK);
});

Create();
Profile();

/*
console.log(indeX);
cardData.forEach((carD) => {
  const indeX = carD.id;
  const carDindeX = carD;
});

navButtonS.forEach((navButton) => {
  Footer(navButton);
});

const maiN = document.querySelectorAll('main');

maiN.forEach((pagE) => {
  console.log(pagE.currentValue + ', ' + currentIndex);
  Card(pagE);
} );

*/
