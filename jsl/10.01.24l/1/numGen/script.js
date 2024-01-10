const num = document.querySelector('.gen');
const button = document.querySelector('.btn');

button.addEventListener('click', function() {
    num.textContent = Math.ceil(Math.random() * 100);
})

