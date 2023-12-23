function details() {
    alert(`Производитель ${car.proizvoditel}\n
           Модель: ${car.model}\n
           Год производства: ${car.yearOfCreate}\n
           Средняя скорость: ${car.speedAvg}`);
}

function wasteOfTime(distance) {
    time = distance / car.speedAvg;
    stops = Math.round(time / 4);
    if (time % 4 == 0) {
        return (time + stops - 1)
    }
    return (time + stops);
}

var car = {
    proizvoditel: 'BMW',
    model: '123',
    yearOfCreate: 2009,
    speedAvg: 100
}

details()

console.log(wasteOfTime(1200))

var drob1 = {
    chislitel: 10,
    znamenatel: 20
}

var drob2 = {
    chislitel: 3,
    znamenatel: 15
}

function drobSum(dr1, dr2) {
    let dr = {
        chislitel: null,
        znamenatel: null
    }
    if (drob1.znamenatel == drob2.znamenatel) {
        dr.znamenatel = dr1.znamenatel;
        dr.chislitel = dr1.chislitel + drob2.chislitel;
        return (dr);
    } else {
        dr.znamenatel = dr1.znamenatel * dr2.znamenatel;
        dr.chislitel = dr1.chislitel * dr2.znamenatel + dr2.chislitel * dr1.znamenatel;
        return (dr);
    }
}

function drobMinus(dr1, dr2) {
    let dr = {
        chislitel: null,
        znamenatel: null
    }
    if (drob1.znamenatel == drob2.znamenatel) {
        dr.znamenatel = dr1.znamenatel;
        dr.chislitel = dr1.chislitel - drob2.chislitel;
        return (dr);
    } else {
        dr.znamenatel = dr1.znamenatel * dr2.znamenatel;
        dr.chislitel = dr1.chislitel * dr2.znamenatel - dr2.chislitel * dr1.znamenatel;
        return (dr);
    }
}

function drobMultiple(dr1, dr2) {
    let dr = {
        chislitel: null,
        znamenatel: null
    }
    dr.znamenatel = dr1.znamenatel * dr2.znamenatel;
    dr.chislitel = dr1.chislitel * dr2.chislitel;
    return (dr);
}

function drobDivide(dr1, dr2) {
    let dr = {
        chislitel: null,
        znamenatel: null
    }
    dr.znamenatel = dr1.znamenatel * dr2.chislitel;
    dr.chislitel = dr1.chislitel * dr2.znamenatel;
    return (dr);
}

function decrease(drob) {
    let dr = {
        chislitel: drob.chislitel,
        znamenatel: drob.znamenatel
    }
    for (let i = 2; i <= dr.chislitel; i++) {
        if (dr.chislitel % i == 0 && dr.znamenatel % i == 0) {
            dr.chislitel = dr.chislitel % i;
            dr.znamenatel = dr.znamenatel % i; 
        }
    }
    return (dr);
}

console.log(drobSum(drob1, drob2))

var time1 = {
    sec: 12,
    min: 24,
    hour: 15
}

function showTime(time) {
    alert(`${time.hour}:${time.min}:${time.sec}`)
}

function addHour(time, hourValue) {
    timeNew = {
        sec: time.sec,
        min: time.min,
        hour: time.hour + hourValue
    }
    if (timeNew.hour >= 24) {
        addedDays = Math.floor(timeNew.hour / 24)
        timeNew.hour -= addedDays * 24;
    }
    return (timeNew);
}

function addMinute(time, minuteValue) {
    timeNew = {
        sec: time.sec,
        min: time.min,
        hour: time.hour
    }
    if (timeNew.minuteValue >= 60) {
        addedHours = Math.round(timeNew.min / 60);
        timeNew.min = addedHours * 60;
        timeNew.hour -= addedHours;
        if (timeNew.hour >= 24) {
            addedDays = Math.floor(timeNew.hour / 24);
            timeNew.hout = addedDays * 24
        }
    }
    return (timeNew);
}

function addSecond(time, secondValue) {
    timeNew = {
        sec: time.sec + secondValue,
        min: time.min,
        hour: time.hour
    }
    if (timeNew.sec >= 60) {
        addMinutes = Math.floor(timeNew.sec / 60);
        timeNew.sec -= addMinutes * 60
        if (timeNew.minuteValue >= 60) {
            addedHours = Math.round(timeNew.min / 60);
            timeNew.min = addedHours * 60;
            timeNew.hour -= addedHours;
            if (timeNew.hour >= 24) {
                addedDays = Math.floor(timeNew.hour / 24);
                timeNew.hout = addedDays * 24;

            }
        }
    }
}

console.log(addHour(time1, 15))

showTime(time1)

// class PrintMachine {
//     constructor(size, color, font_family) {
//         this.size = size;
//         this.color = color;
//         this.font_family = font_family;
//     }

//     print(text) {
//         document.write(`
//             <p style='font-size:${this.size} ;
//             font-family: ${this.font_family} ;
//             color: ${this.color};'>${text}</p>
//         `)
//     }
// }

// obj = new PrintMachine('36pt', 'red', 'sans-serif');
// obj.print('pfjwqefj;wpqfipjwpief')

class News {
    constructor(title, text, tags, publish) 
    {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publish = new Date(publish);
        this.today = new Date();
    }
    print() {
        if ((this.today - this.publish) / 1000 / 60 / 60 < 24) {
            document.write(`
            <h1>${this.title}</h1>
            <p>Today.</p>
            <p>${this.text}</p>
            <p>${this.tags}</p>
            `)
        } else if ((this.today - this.publish) / 1000 / 60 / 60 / 24 <= 7) {
            document.write(`
            <h1>${this.title}</h1>
            <p>${Math.round((this.today - this.publish) / 1000 / 60 / 60 / 24)} days ago.</p>
            <p>${this.text}</p>
            <p>${this.tags}</p>
            `)
        } else {
            document.write(`
            <h1>${this.title}</h1>
            <p>${this.publish.toString()}</p>
            <p>${this.text}</p>
            <p>${this.tags}</p>
            `)
        }
    }
}

var a = new News('Awesome News', 'dadadadadadgdaodgaodgsaoduaodh', '#tag1 #tag2', "December 22, 2023 23:15:30");
var b = new News('Awesome News', 'dadadadadadgdaodgaodgsaoduaodh', '#tag1 #tag2', "December 22, 2023 23:15:30");
var c = new News('Awesome News', 'dadadadadadgdaodgaodgsaoduaodh', '#tag1 #tag2', "December 22, 2023 23:15:30");
class ScrollNews {
    constructor() {
        this.newsArr = arguments;
    }

    get news() {
        return this.newsArr.length;
    }

    print() {
        for (let i = 0; i < this.newsArr.length; i++) {
            
            this.newsArr[i].print();
        }
    }

    createNew(title, text, tags, publish) {
        this.newsArr.push(new News(title, text, tags, publish))
    }

    deleteLast() {
        this.newsArr.pop();
    }

    tagSearch(tag) {
        let a = new Array();
        for (let i = 0; i < this.newsArr.length; i++) {
            if (tag in this.newsArr[i].tags) {
                a.push(this.newsArr[i].tags);
            }
        }
        return (a);
    }
}

var src = new ScrollNews(a, b, c);
src.print();

