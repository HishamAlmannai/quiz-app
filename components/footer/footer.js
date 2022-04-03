export default function Footer(curry){

    const wurste = document.querySelectorAll('[data-js="mainPage"]');

    curry.addEventListener("click", ()=> {
    console.log(curry);
    console.log(wurste);

});


};

/*
    const buttonH = document.querySelector('[data-js="buttonHome"]');
    const buttonN = document.querySelector('[data-js="buttonNav"]');
    const buttonC = document.querySelector('[data-js="buttonCreate"]');
    const buttonP = document.querySelector('[data-js="buttonProfile"]');

buttonH.addEventListener("click", () => {
    console.log("dsf");
})


buttonN.addEventListener("click", () => {
    console.log("ddgdfgdfgsf");
})
*/