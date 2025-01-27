const minValueOption = document.getElementById("min-number");
const maxValueOption = document.getElementById("max-number");
console.log(minValueOption.value, maxValueOption.value);

let minValue = -999;
let maxValue = 999;
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");
const minRange = document.querySelectorAll(".minRange");
const maxRange = document.querySelectorAll(".maxRange");

orderNumberField.innerText = orderNumber;
answerField.innerHTML = `Вы загадали число <br><span class="text-color">${answerNumber}</span>?`;
minRange.forEach((e) => (e.innerHTML = minValue));
maxRange.forEach((e) => (e.innerHTML = maxValue));

for (let i = 999; i > -1000; i--) {
  let option_min = document.createElement("option");
  let option_max = document.createElement("option");
  option_min.innerText = i;
  option_max.innerText = i;
  option_min.value = i;
  option_max.value = i;
  i === -999 ? option_min.setAttribute("selected", "") : null;
  i === 999 ? option_max.setAttribute("selected", "") : null;

  minValueOption.appendChild(option_min);
  maxValueOption.appendChild(option_max);
}

minValueOption.onchange = () => {
  minValue = parseInt(minValueOption.value);
  minValue > maxValue ? alert('Нельзя выбрать минимум больше максимума') || (minValue = maxValue) : minValue = minValue;
  answerNumber = Math.floor((minValue + maxValue) / 2);
  answerField.innerHTML = `Вы загадали число <br><span class="text-color">${answerNumber}</span>?`;
  minRange.forEach((e) => (e.innerHTML = minValue));
};

maxValueOption.onchange = () => {
  maxValue = parseInt(maxValueOption.value);
  maxValue < minValue ? alert('Нельзя выбрать максимум меньше минимума') || (maxValue = minValue) : maxValue = maxValue;
  answerNumber = Math.floor((minValue + maxValue) / 2);
  answerField.innerHTML = `Вы загадали число <br><span class="text-color">${answerNumber}</span>?`;
  maxRange.forEach((e) => (e.innerHTML = maxValue));
};

document.getElementById("btnRetry").addEventListener("click", function () {
  alert(`Начнём заново! \u{1F61C}`);
  minValue = parseInt(minValueOption.value);
  maxValue = parseInt(maxValueOption.value);
  answerNumber = Math.floor((minValue + maxValue) / 2);
  orderNumber = 1;
  gameRun = true;
  orderNumberField.innerText = orderNumber;
  answerField.innerHTML = `Вы загадали число <br><span class="text-color">${answerNumber}</span>?`;
});

document.getElementById("btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      // число прописью
      const absAnswerNumber = Math.abs(answerNumber);
      let units = absAnswerNumber % 20;
      let tens = (absAnswerNumber % 100) - units;
      let hundreds = (absAnswerNumber % 1000) - units - tens;
      let answerNumberStr;
      // hundreds
      switch (hundreds) {
        case 100:
          hundreds = "сто";
          break;
        case 200:
          hundreds = "двести";
          break;
        case 300:
          hundreds = "триста";
          break;
        case 400:
          hundreds = "четыреста";
          break;
        case 500:
          hundreds = "пятьсот";
          break;
        case 600:
          hundreds = "шестьсот";
          break;
        case 700:
          hundreds = "семьсот";
          break;
        case 800:
          hundreds = "восемьсот";
          break;
        case 900:
          hundreds = "девятьсот";
          break;
        default:
          hundreds = "";
          break;
      }

      // tens
      switch (tens) {
        case 20:
          tens = "двадцать";
          break;
        case 30:
          tens = "тридцать";
          break;
        case 40:
          tens = "сорок";
          break;
        case 50:
          tens = "пятьдесят";
          break;
        case 60:
          tens = "шестьдесят";
          break;
        case 70:
          tens = "семьдесят";
          break;
        case 80:
          tens = "восемьдесят";
          break;
        case 90:
          tens = "девяносто";
          break;
        default:
          tens = "";
          break;
      }

      // units

      switch (units) {
        case 1:
          units = "один";
          break;
        case 2:
          units = "два";
          break;
        case 3:
          units = "три";
          break;
        case 4:
          units = "четыре";
          break;
        case 5:
          units = "пять";
          break;
        case 6:
          units = "шесть";
          break;
        case 7:
          units = "семь";
          break;
        case 8:
          units = "восемь";
          break;
        case 9:
          units = "девять";
          break;
        case 10:
          units = "десять";
          break;
        case 11:
          units = "одиннадцать";
          break;
        case 12:
          units = "двенадцать";
          break;
        case 13:
          units = "тринадцать";
          break;
        case 14:
          units = "четырнадцать";
          break;
        case 15:
          units = "пятнадцать";
          break;
        case 16:
          units = "шестнадцать";
          break;
        case 17:
          units = "семьнадцать";
          break;
        case 18:
          units = "восемьнадцать";
          break;
        case 19:
          units = "девятнадцать";
          break;
        default:
          units = "";
          break;
      }
      if (answerNumber < 20) {
        answerNumberStr = units;
      } else if (answerNumber < 100) {
        answerNumberStr = tens + " " + units;
      } else if (answerNumber < 1000) {
        answerNumberStr = hundreds + " " + tens + " " + units;
      }
      answerNumberStr =
        answerNumber < 0 ? "минус " + answerNumberStr : answerNumberStr;
      // КОНЕЦ число прописью
      const answerNumberText =
        answerNumberStr.length < 20 ? answerNumberStr : answerNumber;

      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseNumber = Math.ceil(Math.random() * 9);
      switch (phraseNumber) {
        case 1:
          answerField.innerHTML = `Число <br><span class="text-color">${answerNumberText}</span><br>стало вашим тайным выбором ?`;
          break;
        case 2:
          answerField.innerHTML = `Наверое, это число — <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 3:
          answerField.innerHTML = `Вы, похоже, задумали цифру <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 4:
          answerField.innerHTML = `Ваше число — <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 5:
          answerField.innerHTML = `Вы остановились на числе <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 6:
          answerField.innerHTML = `Вы задумали число <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 7:
          answerField.innerHTML = `Число <br><span class="text-color">${answerNumberText}</span><br> — это ваше тайное число`;
          break;
        case 8:
          answerField.innerHTML = `Вы сохранили число <br><span class="text-color">${answerNumberText}</span><br>в секрете`;
          break;
        case 9:
          answerField.innerHTML = `Вы, похоже, задумали число <br><span class="text-color">${answerNumberText}</span>`;
          break;
        default:
          answerField.innerHTML = "Так не бывает!";
          break;
      }
    }
  }
});

document.getElementById("btnLess").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseNumber = Math.ceil(Math.random() * 9);
      // число прописью
      const absAnswerNumber = Math.abs(answerNumber);
      let units = absAnswerNumber % 20;
      let tens = (absAnswerNumber % 100) - units;
      let hundreds = (absAnswerNumber % 1000) - units - tens;
      let answerNumberStr;
      // hundreds
      switch (hundreds) {
        case 100:
          hundreds = "сто";
          break;
        case 200:
          hundreds = "двести";
          break;
        case 300:
          hundreds = "триста";
          break;
        case 400:
          hundreds = "четыреста";
          break;
        case 500:
          hundreds = "пятьсот";
          break;
        case 600:
          hundreds = "шестьсот";
          break;
        case 700:
          hundreds = "семьсот";
          break;
        case 800:
          hundreds = "восемьсот";
          break;
        case 900:
          hundreds = "девятьсот";
          break;
        default:
          hundreds = "";
          break;
      }

      // tens
      switch (tens) {
        case 20:
          tens = "двадцать";
          break;
        case 30:
          tens = "тридцать";
          break;
        case 40:
          tens = "сорок";
          break;
        case 50:
          tens = "пятьдесят";
          break;
        case 60:
          tens = "шестьдесят";
          break;
        case 70:
          tens = "семьдесят";
          break;
        case 80:
          tens = "восемьдесят";
          break;
        case 90:
          tens = "девяносто";
          break;
        default:
          tens = "";
          break;
      }

      // units

      switch (units) {
        case 1:
          units = "один";
          break;
        case 2:
          units = "два";
          break;
        case 3:
          units = "три";
          break;
        case 4:
          units = "четыре";
          break;
        case 5:
          units = "пять";
          break;
        case 6:
          units = "шесть";
          break;
        case 7:
          units = "семь";
          break;
        case 8:
          units = "восемь";
          break;
        case 9:
          units = "девять";
          break;
        case 10:
          units = "десять";
          break;
        case 11:
          units = "одиннадцать";
          break;
        case 12:
          units = "двенадцать";
          break;
        case 13:
          units = "тринадцать";
          break;
        case 14:
          units = "четырнадцать";
          break;
        case 15:
          units = "пятнадцать";
          break;
        case 16:
          units = "шестнадцать";
          break;
        case 17:
          units = "семьнадцать";
          break;
        case 18:
          units = "восемьнадцать";
          break;
        case 19:
          units = "девятнадцать";
          break;
        default:
          units = "";
          break;
      }
      if (answerNumber < 20) {
        answerNumberStr = units;
      } else if (answerNumber < 100) {
        answerNumberStr = tens + " " + units;
      } else if (answerNumber < 1000) {
        answerNumberStr = hundreds + " " + tens + " " + units;
      }
      answerNumberStr =
        answerNumber < 0 ? "минус " + answerNumberStr : answerNumberStr;
      // КОНЕЦ число прописью
      const answerNumberText =
        answerNumberStr.length < 20 ? answerNumberStr : answerNumber;
      switch (phraseNumber) {
        case 1:
          answerField.innerHTML = `Число <br><span class="text-color">${answerNumberText}</span><br>стало вашим тайным выбором ?`;
          break;
        case 2:
          answerField.innerHTML = `Наверое, это число — <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 3:
          answerField.innerHTML = `Вы, похоже, задумали цифру <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 4:
          answerField.innerHTML = `Ваше число — <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 5:
          answerField.innerHTML = `Вы остановились на числе <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 6:
          answerField.innerHTML = `Вы задумали число <br><span class="text-color">${answerNumberText}</span>?`;
          break;
        case 7:
          answerField.innerHTML = `Число <br><span class="text-color">${answerNumberText}</span><br> — это ваше тайное число`;
          break;
        case 8:
          answerField.innerHTML = `Вы сохранили число <br><span class="text-color">${answerNumberText}</span><br>в секрете`;
          break;
        case 9:
          answerField.innerHTML = `Вы, похоже, задумали число <br><span class="text-color">${answerNumberText}</span>`;
          break;
        default:
          answerField.innerHTML = "Так не бывает!";
          break;
      }
    }
  }
});

document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
    const phraseNumber = Math.ceil(Math.random() * 9);
    switch (phraseNumber) {
      case 1:
        answerField.innerHTML = `Я всегда прав! <br> \u{1F680}`;
        break;
      case 2:
        answerField.innerHTML = `Я всегда в точку! <br> \u{1F682}`;
        break;
      case 3:
        answerField.innerHTML = `Я не оставляю шансов на ошибку! <br> \u{1F6BD}`;
        break;
      case 4:
        answerField.innerHTML = `Я всегда попадаю в цель! <br> \u{1F407}`;
        break;
      case 5:
        answerField.innerHTML = `У меня дар угадывать! <br> \u{1F411}`;
        break;
      case 6:
        answerField.innerHTML = `Я всегда вижу истину! <br> \u{1F427}`;
        break;
      case 7:
        answerField.innerHTML = `У меня отличная интуиция! <br> \u{1F42B}`;
        break;
      case 8:
        answerField.innerHTML = `Я умею находить верный ответ! <br> \u{1F439}`;
        break;
      case 9:
        answerField.innerHTML = `Я всегда на верном пути! <br> \u{2615}`;
        break;
      default:
        answerField.innerHTML = `Так не бывает! <br> \u{1F378}`;
        break;
    }
    gameRun = false;
  }
});
