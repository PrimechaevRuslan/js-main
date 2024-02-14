// let table = document.getElementById("table");
let item = document.querySelectorAll(".item");

item.forEach(element => {

    element.onmouseenter = function (e) {
        console.log(e.target)
        this.style.backgroundColor = "green";
    }
    element.onmouseleave = function () {
        this.style.backgroundColor = "moccasin";
    }
});

