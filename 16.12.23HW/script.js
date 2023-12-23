// Задание 1
// var start = Number(prompt("Введите начало диапазона: "));
// var end = Number(prompt("Введите конец диапазона: "));
// var sum = 0;
// 
// while (start < end) {
//     sum += start
//     start++
// }
// 
// alert(sum);
// 

// Задание 2

// var a = Number(prompt("Введите первое число: "));
// var b = Number(prompt("Введите второе число: "));
// 
// const gcd = (a, b) => {
//     if (b !== 0) {
//         const c = a % b
//         return gcd(b, c)
//     }
//     return a
// }
// 
// alert(gcd(a, b))
// 
// Задание 3
// var num = +prompt("Введите число: ");
// var i = 1;

// while (i <= num) {
//     if(num % i === 0) {
//         alert(i);
//     }
//     i++;
// }

// 

// Задание 4
// alert(prompt("Введите число: ").length);
// 

// Задание 5
// let counterZero = 0,
//     counterMinus = 0,
//     counterPlus = 0,
//     counterOdd = 0,
//     counterEven = 0;
// for (i = 0; i < 10; i++) {
//     let check = Number(prompt("Введите число:"));
//     if (check > 0) {
//         counterPlus++;
//     } else if (check < 0) {
//         counterMinus++;
//     } else if (check == 0) {
//         counterZero++;
//     } 
//     if (check % 2 == 0) {
//         counterEven++;
//     }
//      if (check % 2 != 0) {
//         counterOdd++;
//     }

// }
// alert("Положительных чисел: " + counterPlus);
// alert("Отрицательных чисел: " + counterMinus);
// alert("Нулей: " + counterZero);
// alert("Четных чисел: " + counterEven);
// alert("Нечетных чисел: " + counterOdd);

// 


// Задание 6 (version 1) Неправильно прочитал условие 0))))))

// function add(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function div(a, b) {
//     return a / b;
// }
// function mul(a, b) {
//     return a * b;
// }
// let flag = true;

// while (flag == true) {


//     let sample = prompt("Введите пример: ");
//     let sampleReplace = sample.replace(/[^0-9, ]/g, "").split("");
//     let firstNum = Number(sampleReplace[0]);
//     let secondNum = Number(sampleReplace[1]);
//     if (sample.includes("+")) {
//         // console.log(add(firstNum, secondNum));
//         console.log();
//     } else if (sample.includes("-")) {
//         console.log(sub(firstNum, secondNum))

//     } else if (sample.includes("/")) {
//         console.log(div(firstNum, secondNum))

//     } else if (sample.includes("*")) {
//         console.log(mul(firstNum, secondNum))

//     }
//     let question = prompt("Хотите продолжить?:", '(да/нет)');
//     if (question == "нет") {
//         break;
//     }



// }
// 
// Задание 6 (version 2)
// while (true) {
//     let firstNum = prompt("Введите первое число: ");
//     firstNum = Number(firstNum)
//     let sign = prompt("Введите знак: ");
//     let secondNum = prompt("Введите второе число: ");
//     secondNum = Number(secondNum)
//     switch (sign) {
//         case "+":
//             result = firstNum + secondNum
//             break;
//         case "-":
//             result = firstNum - secondNum
//             break;
//         case "/":
//             result = firstNum / secondNum
//             break;
//         case "*":
//             result = firstNum * secondNum
//             break;
//     }
//     alert(result)
//     let question = prompt("Хотите продолжить?:", '(да/нет)');
//     if (question == "нет") {
//         break;
//     }
// }
// 

// Задание 7
// let number = prompt("Введите число:");
// let shift = prompt("На сколько цифр его сдвинуть:");

// if (!isNaN(number) && !isNaN(shift)) {
//     let numberString = String(number);
//     let shiftedNumber = numberString.slice(shift) + numberString.slice(0, shift);
//     alert(shiftedNumber);
// } else {
//     alert("Введены некорректные значения.");
// }
// 

// Задание 8 
// const day = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let counter = 0;
// while (confirm(day[counter] + ", Хотите узнать следующий день?")) {
//     counter = (counter + 1) % day.length;
// }
// 

// Задание 9
for (i = 2; i <= 9; i++) {
    alert("Таблица для числа: " + i);
    for (j = 1; j <= 10; j++) {
        alert(i + "*" + j + "=" + (i * j))
    }
}
// 