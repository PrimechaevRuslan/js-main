// document.addEventListener("click", (e) => {
//     console.log(e.target); //
// });
// ^
// | 
// |
// L Для проверки нажатого элемента 

let item = document.querySelectorAll(".item");
item.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle('checked');
    });
});

let closeBtn = document.querySelectorAll(".close-btn");

console.log(closeBtn)
closeBtn.forEach(e => {
    e.addEventListener("click", (el) => {
       let div = el.target.parentElement;
       div.style.display = "none";
    });
});

let setEl = () => {
    let li = document.createElement("li");
    let input = document.getElementById("task").value;
    let valueInput = document.createTextNode(input);
    console.log(valueInput)
};