export default function Card(carD){

/*
const buttonB = carD.querySelector('[data-js="button__bookmark"]');

const bookmarkT = document.querySelector('[data-js="bookmark_true"]');
const bookmarkF = document.querySelector('[data-js="bookmark_false"]');


buttonB.addEventListener("click", () => {
  bookmarkT.classList.toggle("svg--hide");
  bookmarkF.classList.toggle("svg--hide");
  console.log("test")
  })

  */



const buttonA = carD.querySelector('[data-js="AnswerButton"]');
const sectionA = document.querySelector('[data-js="AnswerSection"]')
const showA = false;



buttonA.addEventListener("click", () => {
    
  if (showA){
 console.log("true")
      buttonA.innerText = "Hide Answer";
      sectionA.classList.toggle("hidden");
  }
  else
  console.log("false")
  buttonA.innerText = "Show Answer";
  });

  };