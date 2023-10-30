import './assets/styles/index.css';

let input = document.querySelector(".guess__input");
let button = document.querySelector(".guess__check-button");
let check = document.querySelector(".guess__result-value");
let help = document.querySelector(".guess__result-hint");
let count = document.querySelector(".guess__result-count");
let min = document.querySelector(".guess__min");
let max = document.querySelector(".guess__max");
let choose = document.querySelector(".guess__choose-button");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

let item = 0;
let randomNum = getRandomNumber(minValue, maxValue);
let userNum;
let minValue = 0;
let maxValue = 100;

choose.addEventListener('click', function (evt) {
  evt.preventDefault();
  minValue = min.value;
  maxValue = max.value;
  startPlay();
});

function startPlay() {
  item = 0
  randomNum = getRandomNumber(minValue, maxValue);
}

startPlay();

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  userNum = input.value;
  console.log(userNum, randomNum);
  if (userNum < minValue || userNum > maxValue) {
    check.textContent = "Что-то пошло не так";
    help.textContent = "Вы ввели число за переделами диапазона";
    item++;
    count.textContent = item;
  } else if (item !== 0 && item % 3 === 0) {
    check.textContent = "Пока не угадали";
    if (randomNum % 2 === 0) {
      help.textContent = "Загаданное число четное";
    } else {
      help.textContent = "Загаданное число нечетное";
    }
    item++;
    count.textContent = item;
  } else if (userNum > randomNum) {
    check.textContent = "Пока не угадали";
    help.textContent = "Загаданное число меньше";
    item++;
    count.textContent = item;
  } else if (userNum < randomNum) {
    check.textContent = "Пока не угадали";
    help.textContent = "Загаданное число больше";
    item++;
    count.textContent = item;
  } else {
    check.textContent = "Поздравляю! Вы угадали!";
    help.textContent = "Верно";
    item++;
    count.textContent = item;
    startPlay();
  }
})

