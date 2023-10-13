//1

let num = -10; //Считываем число

if (num <0){ //Условие проверки число отрицательное или положительное
    console.log("число отрицательное"); //Выводим в консоль
} else{
    console.log("число не отрицательное"); //Выводим в консоль
}

//2

let str = 'man' //Считываем строку
let length = str.length; //Считаем длину строки
console.log(str); //Выводим в консоль


//3

let str2 = 'man' //Считываем строку
let lastChar = str.charAt(str.length - 1); //Получаем последний элемент
console.log(lastChar); //Выводим в консоль


//4

let num2 = 10; //Считываем число

if (num2 % 2 == 0){ //Условие проверки число на чётное и нечётное
    console.log('число четное'); //Выводим в консоль
} else{
    console.log("число не четное"); //Выводим в консоль
}

//5

let str5 ='МИГУЛЯ'; //Считываем первое слово 
let str6 ='НЕМИГУЛЯ'; //Считываем второе слово

let str7 = str5.charAt(1); //Получаем первый элемент первого слова
let str8 = str6.charAt(1); // Получаем первый элемент второго слова

if (str7 == str8) { //Условие проверка первых букв слов
    console.log("Первые буквы равна"); //Выводим в консоль
}
else {
    console.log("Первые буквы не равны"); //Выводим в консоль
}

//6

let num3 = 1337; //Считываем число
let firstnum = Number(num3.toString()[0]); //Берём первый символ числа
let lastnum = num3 % 10; //Берём последний символ числа

console.log('сумма первого и последнего числа - ' + (firstnum + lastnum)); //Выводим в консоль


//7

function sumDigits(number) { //Функция для подсчёта суммы цифр 
    let sum = 0
    let digits = Math.abs(number).toString();

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits.charAt(i), 10);
    }
    return sum;
}

let number = 12345; // Считываем число
let digitSum = sumDigits(number); // Выводим получившееся число в консоль
