let counter = document.getElementById("likecount");
let btn = document.getElementById("likediv");

btn.addEventListener("click", function(e) {
    let number = +counter.textContent;
    number++;
    counter.textContent = number;
    if (counter.textContent == "100") {
        counter.textContent = "0"
    }
});