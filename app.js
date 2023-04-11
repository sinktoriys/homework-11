//Завдання1.
let num = prompt("Введіть число,яке треба підвести у квадрат:");
alert(num ** 2);

//Завдання 2.
let name = prompt("Введіть ваше ім'я:");
let deposit = prompt("Введіть суму депозиту:");
let period = prompt("Введіть строк дії депозиту:");
const depositRate = 0.2;
let profit = deposit * period * depositRate;
alert(
  `Шановний ${name},Ви внесли ${deposit} грн., під 20% річних, на термін ${period} роки. За цей період часу ви заробите ${profit} грн.`
);

//Завдання 3.
let a = prompt("Введіть число a:");
let b = prompt("Введіть число b:");
alert(
  `Сума чисел: a+b=${Number(a) + Number(b)}. Різниця чисел : a-b=${
    Number(a) - Number(b)
  }. Добуток чисел : a*b=${Number(a) * Number(b)}. Частка чисел : a/b=${
    Number(a) / Number(b)
  }. `
);
