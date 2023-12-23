// Задание 1
let age = +prompt("Сколько вам лет?", '');
if (age > 0 && age < 12) {
    alert("Вы ребенок!");
} else if (age > 12 && age < 18) {
    alert("Вы подросток!");
} else if (age > 18 && age < 60) {
    alert("Вы взорслый!");
} else {
    alert("Вы пенсионер!");
}

// 
// Задание 2
let number = +prompt("Введите цифру");
switch (number) {
    case 1:
        alert("!");
        break
    case 2:
        alert("@");
        break
    case 3:
        alert("#");
        break
    case 4:
        alert("$");
        break
    case 5:
        alert("%");
        break
    case 6:
        alert("^");
        break
    case 7:
        alert("&");
        break
    case 8:
        alert("*");
        break
    case 9:
        alert("(");
        break
    case 0:
        alert(")");
        break
}
// 

// Задание 3
let numberCheck = prompt("Введите трехзначное число");
let array = ("" + numberCheck).split("").map(Number);
if (array[0] == array[1] || array[0] == array[2] || array[1] == array[2]) {
    alert("Есть одинаковые числа");
} else {
    alert("Одинаковых чисел нет");
}
// 
// Задание 4
let year = prompt("Введите год");
if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert("Год високосный");
} else {
    alert("Год не високосный");
}
// 

// Задание 5
let number5r = prompt("Введите пятиразрядное число");
if (number5r == number5r.split("").reverse().join("")) {
    alert("Это палиндром");
} else {
    alert("Это не палиндром");
}

// Задание 6
let USD = prompt("Введите количество USD");
let choose = prompt("Введите валюту (EUR, UAN, AZN)");
switch (choose) {
    case "EUR":
        alert(USD * 0.91 + " Евро");
        break
    case "UAN":
        alert(USD * 37 + " Гривен(ны)");
        break
    case "AZN":
        alert(USD * 1,70 + " Манат");
        break
}
// 

// Задание 7
let sum = prompt("Введите сумму покупки")
if (sum > 200 && sum < 300) {
    alert("Сумма с учетом скидки: " + sum - (sum * 3 / 100));
} else if (sum > 300 && sum <= 500) {
    alert("Сумма с учетом скидки: " + sum - (sum * 5 / 100));
} else if (sum > 500) {
    alert("Сумма с учетом скидки: " + sum - (sum * 7 / 100));
} else {
    alert("Сумма с учетом скидки: " + sum);
}
// 

// Задание 8
let piDouble = 3.14 * 2;
let squarePer = +prompt("Введите периметр квадрата");
let circleLen = +prompt("Введите длину окружности");
let radius = piDouble / circleLen;
if (radius <= (squarePer / 4) / 2) {
    alert("Окружность может поместиться");
} else {
    alert("Окружность не поместится");
}
// 

// Задание 9
let question1 = prompt("Как называется язык гипертекстовой разметки? (Python, HTML или Pascal");
let question2 = prompt("Как называется язык стилизации для гипертекстовой разметки? (C++, C# или CSS");
let question3 = prompt("Как называется язык для создания сценариев на странице? (Java, JavaScript или Lua");
let scoreCounter = 0;
switch (question1) {
    case "HTML":
        scoreCounter += 2
        break
    case "Python":
        break
    case "Pascal":
        break
}
switch (question2) {
    case "CSS":
        scoreCounter += 2
        break
    case "C++":
        break
    case "C#":
        break
}

switch (question3) {
    case "JavaScript":
        scoreCounter += 2
        break
    case "Java":
        break
    case "Lua":
        break
}

alert("Ваш счет: " + scoreCounter)

// 

// Задание 10
var curDate = prompt('Введите дату в формате DD.MM.YYYY', '');
curDate = curDate.split('.').map(x => +x)
console.log(curDate)
if (curDate[2] % 4 == 0) {
    if (curDate[1] == 2) {
        if (curDate[0] == 29) {
            curDate[0] = 1;
            curDate[1] += 1;
        } else {
            curDate[0] += 1
        }
    } else if ([4, 6, 9, 11].includes(curDate[1])) {
        if (curDate[0] == 30) {
            curDate[0] = 1;
            curDate[1] += 1;
        } else {
            curDate[0] += 1
        }
    } else {
        if (curDate[0] == 31) {
            curDate[0] = 1;
            curDate[1] += 1;
        } else {
            curDate[0] += 1
        }
    }
} else {
    if (curDate[1] == 2) {
        if (curDate[0] == 28) {
            curDate[0] = 1;
            curDate[1] += 1;
        } else {
            curDate[0] += 1
        }
    } else if ([4, 6, 9, 11].includes(curDate[1])) {
        if (curDate[0] == 30) {
            curDate[0] = 1;
            curDate[1] += 1;
        } else {
            curDate[0] += 1
        }
    } else {
        console.log(curDate[0])
        if (curDate[0] == 31) {
            curDate[0] = 1;
            curDate[1] += 1;
        } else {
            curDate[0] += 1
        }
    }
}
if (curDate[1] == 13) {
    curDate[1] = 1;
    curDate[2] += 1;
}
alert(`${curDate[0]}.${curDate[1]}.${curDate[2]}`)
// 


