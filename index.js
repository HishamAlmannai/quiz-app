console.clear();

const buttonB = document.querySelector('[data-js="button__bookmark"]');
const bookmarkT = document.querySelector('[data-js="bookmark_true"]');
const bookmarkF = document.querySelector('[data-js="bookmark_false"]');

console.log("iregenaers");

buttonB.addEventListener("click", () => {
  bookmarkT.classList.toggle("svg_hide");
  bookmarkF.classList.toggle("svg_hide");
  console.log("test")
  })




const buttonA = document.querySelector('[data-js="showAnswerButton"]');
const buttonH = document.querySelector('[data-js="hideAnswerButton"]');
const sectionH = document.querySelector('[data-js="hideAnswerSection"]')

function AnswerT(){
    buttonA.classList.toggle("hide__Answer");
    buttonH.classList.toggle("hide__Answer");
    sectionH.classList.toggle("hide__Answer");
}

buttonA.addEventListener("click", () => {
 AnswerT();
  });

buttonH.addEventListener("click", () => {
    AnswerT();
    })