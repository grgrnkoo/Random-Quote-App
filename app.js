const quote = document.getElementById('quote');
const idNumber = document.getElementById('id-number');
const dice = document.getElementById('dice');

const refreshQuote = () => {
    fetch('https://api.adviceslip.com/advice').then((request) => {
        return request.json();
    }).then((data) => {
        quote.textContent = `"${data.slip.advice}"`;
        idNumber.textContent = data.slip.id;
    })
}

refreshQuote();
dice.addEventListener('click', refreshQuote);