var textOut = document.querySelector('.textSH');
var btn = document.querySelector('.btn');

btn.addEventListener("click", function () {
    console.log(textOut)
    if (textOut.innerHTML == "") {
        document.querySelector('.textSH').innerHTML = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate facilis consectetur saepe expedita vero optio <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, earum! <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque?</p>`;
    } else {
        textOut.textContent = "";
    }
});