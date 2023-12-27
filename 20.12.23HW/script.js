// Задание 1
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     get radius() {
//         return this._radius;
//     }
//     set radius(value) {
//         if (value > 0) {
//             this._radius = value;
//         } else {
//             throw new Error("Радиус должен быть положительным числом.");
//         }
//     }
//     get diameter() {
//         return 2 * this.radius;
//     }

//     area() {
//         return Math.PI * this.radius ** 2;
//     }

//     cirCut() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// const circle = new Circle(5);
// console.log("Радиус окружности:", circle.radius);
// circle.radius = 7;
// console.log("Новый радиус окружности:", circle.radius);
// console.log("Диаметр окружности:", circle.diameter);
// console.log("Площадь окружности:", circle.area());
// console.log("Длина окружности:", circle.cirCut());
// 

// Задание 2
// class HtmlElement {
//     constructor(tagName, isSelfClosing = false, textContent = '', attributes = [], styles = [], nestedElements = []) {
//         this.tagName = tagName;
//         this.isSelfClosing = isSelfClosing;
//         this.textContent = textContent;
//         this.attributes = attributes;
//         this.styles = styles;
//         this.nestedElements = nestedElements;
//     }

//     setAttribute(attribute) {
//         this.attributes.push(attribute);
//     }

//     setStyle(style) {
//         this.styles.push(style);
//     }

//     appendNestedElement(element) {
//         this.nestedElements.push(element);
//     }

//     prependNestedElement(element) {
//         this.nestedElements.unshift(element);
//     }

//     getHtml() {
//         let html = `<${this.tagName}`;

//         // Add attributes
//         for (const attribute of this.attributes) {
//             html += ` ${attribute}`;
//         }

//         // Add styles
//         if (this.styles.length > 0) {
//             html += ` style="${this.styles.join('; ')}"`;
//         }

//         if (this.isSelfClosing) {
//             html += ' />';
//         } else {
//             html += '>';

//             // Add text content
//             html += this.textContent;

//             // Add nested elements
//             for (const element of this.nestedElements) {
//                 html += element.getHtml();
//             }

//             html += `</${this.tagName}>`;
//         }

//         return html;
//     }
// }

// // Create the desired block
// const wrapper = new HtmlElement('div');
// const heading = new HtmlElement('h1', false, 'Hello, World!');
// const paragraph = new HtmlElement('p', false, 'This is a paragraph.');
// const link = new HtmlElement('a', false, 'Click me!', ['href="https://example.com"']);
// const image = new HtmlElement('img', true, '', ['src="image.jpg"', 'alt="Image"']);

// wrapper.appendNestedElement(heading);
// wrapper.appendNestedElement(paragraph);
// wrapper.appendNestedElement(link);
// wrapper.appendNestedElement(image);

// // Add the block to the page
// document.write(wrapper.getHtml());

// // 

class HtmlElement {
    constructor(tag, selfClose = false, text = '', atribs = [], styles = [], nestedElems = []) {
        this.tag = tag;
        this.selfClose = selfClose;
        this.text = text;
        this.atribs = atribs;
        this.styles = styles;
        this.nestedElems = nestedElems;
    }

    set atribs(value) {
        this.atribs.push(value);
    }

    set styles(value) {
        this.styles.push(value);
    }

    addTail(elem) {
        this.nestedElems.push(elem);
    }

    addHead(elem) {
        this.nestedElems.unshfit(elem);
    }

    getHtml() {
        let code = this.tag;

        atr = this.artribs;

        style = `style=""`
        for (i in this.styles) {
            style.join(i + ";")

        }

        style += "'";
    }
}


let a = new HtmlElement('p', false, 'Hello World', ["id=wrapper"], ['display:flex'], []);