const quote = document.getElementById('quote');
const idNumber = document.getElementById('id-number');
const dice = document.getElementById('dice');

// const refreshQuote = () => {
//     fetch('https://api.adviceslip.com/advice').then((request) => {
//         return request.json();
//     }).then((data) => {
//         quote.textContent = `"${data.slip.advice}"`;
//         idNumber.textContent = data.slip.id;
//     })
// }

const refreshQuote = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const { slip } = await res.json();

    console.log(slip);

    quote.textContent = `"${slip.advice}"`;
    idNumber.textContent = slip.id;
}

refreshQuote();
dice.addEventListener('click', refreshQuote);