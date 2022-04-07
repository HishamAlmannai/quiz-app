export default function Card(carD) {
  const cards = document.querySelectorAll('[data-js=card]');
  cards.forEach(caRD => {
    const buttonA = caRD.querySelector('[data-js="AnswerButton"]');
    const sectionA = caRD.querySelector('[data-js="AnswerSection"]');
    let showA = false;
    console.log('was ist los');
    buttonA.addEventListener('click', () => {
      showA = !showA;
      if (showA) {
        buttonA.innerText = 'Hide Answer';
        sectionA.classList.toggle('hidden');
      } else {
        buttonA.innerText = 'Show Answer';
        sectionA.classList.toggle('hidden');
      }
    });
  });
}
