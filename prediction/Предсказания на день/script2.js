let phrases = [
{text: 'Беня накакулит и уронит цветок'},
{text: 'на работе будешь чиллить'},
{text: 'будешь молодцом'},
{text: 'день вкусностей'},
{text: 'выпадет пузо если не скажешь трижды «Святой Бенедикт огради от зла своими мягкими лапками»'},
{text: 'Тебя любят'}
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let forecast = document.querySelector('.forecast');

button.addEventListener("click", function(){
  let randomElement = getRandomElement(phrases);
  forecast.textContent = smoothly (forecast, "textContent", randomElement.text);
});

for(let i=0; i<=2; i++){
  smoothly(forecast, "textContent", phrases[i].text)
}

