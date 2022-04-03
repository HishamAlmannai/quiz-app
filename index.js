import Footer from "./components/footer/footer.js";
import Card from "./components/card/card.js";
import Card from "./components/card/create.js";
import Card from "./components/card/profile.js";

const navButtonS = document.querySelectorAll('[data-js="buttonNav"]');
const maiN = document.querySelectorAll('main');

maiN.forEach((pagE) => {
  console.log(pagE.currentValue + ', ' + currentIndex);
  Card(pagE);
} );

navButtonS.forEach((navButton) => {
  Footer(navButton);
});

const cardS = document.querySelectorAll('[data-js="card"]');

cardS.forEach((carD) => {
  Card(carD);
});
