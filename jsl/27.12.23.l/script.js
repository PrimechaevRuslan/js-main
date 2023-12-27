// class Button {
//     constructor(width, height, textContent) {
//         this.width = width;
//         this.height = height;
//         this.textContent = textContent;
//     }

//     showBtn() {
//         document.write(`<button style="height:${this.height}; width:${this.width};">${this.textContent}</button>`);
//     }
// }





// class Bootstrap extends Button {
//     constructor(height, width, textContent, color) {
//         super(height, width, textContent);
//         this.color = color;
//     }

//     showBtn() {
//         document.write(`<button style="height:${this.height}; width:${this.width}; color:${this.color};">${this.textContent}</button>`);
//     }
// }

// let button = new Bootstrap('300px', '300px', "BUTTON", 'red');
// button.showBtn()

// class GeometricFigure {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }

//     displayInfo() {
//         console.log(`Фигура: ${this.getName()}`);
//     }

//     calculateArea() {
//         return 0;
//     }

//     calculatePerimeter() {
//         return 0;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(sideLength) {
//         super("Квадрат");
//         this.sideLength = sideLength;
//     }

//     displayInfo() {
//         super.displayInfo();
//         console.log(`Сторона: ${this.sideLength}`);
//     }

//     calculateArea() {
//         return this.sideLength ** 2;
//     }

//     calculatePerimeter() {
//         return this.sideLength * 4;
//     }
// }

// class Rectangle extends GeometricFigure {
//     constructor(width, height) {
//         super("Прямоугольник");
//         this.width = width;
//         this.height = height;
//     }

//     displayInfo() {
//         super.displayInfo();
//         console.log(`Длина: ${this.width}`);
//         console.log(`Ширина: ${this.height}`);
//     }

//     calculateArea() {
//         return this.width * this.height;
//     }

//     calculatePerimeter() {
//         return 2 * (this.width + this.height);
//     }
// }

// class Triangle extends GeometricFigure {
//     constructor(side1, side2, side3) {
//         super("Треугольник");
//         this.side1 = side1;
//         this.side2 = side2;
//         this.side3 = side3;
//     }

//     displayInfo() {
//         super.displayInfo();
//         console.log(`Сторона 1: ${this.side1}`);
//         console.log(`Сторона 2: ${this.side2}`);
//         console.log(`Сторона 3: ${this.side3}`);
//     }

//     calculatePerimeter() {
//         return this.side1 + this.side2 + this.side3;
//     }

//     calculateArea() {
//         var halfperimeter = this.calculatePerimeter() / 2
//         return Math.sqrt(halfperimeter * (halfperimeter - this.side1) * (halfperimeter - this.side2) * (halfperimeter - this.side3));
//     }
// }

// const figures = [
//     new Square(5),
//     new Rectangle(5, 10),
//     new Triangle(3, 4, 5)
// ]

// for (const figure of figures) {
//     figure.displayInfo();
//     console.log(`Площадь: ${figure.calculateArea()}`);
//     console.log(`Периметр: ${figure.calculatePerimeter()}`);
//     console.log("--------------------------------");
// }

class ExtentedArray extends Array {

    getString(separator) {
        return this.join(separator);
    }

    getHtml(tag) {
        let htmlString = "";

        if (tag === "li") {
            htmlString += "<ul>";
            this.forEach((element) => {
                htmlString += `<li>${element}</li>`;
            });
        }
        else {
            this.forEach((element) => {
                htmlString += `<${tag}>${element}</${tag}>`
            });
        }
        return htmlString;
    }
}

const extentedArray = new ExtentedArray();
extentedArray.push("Hello", "Hi", "Zdarova")

document.write(extentedArray.getString("><><>"));
document.write(extentedArray.getHtml("li"));