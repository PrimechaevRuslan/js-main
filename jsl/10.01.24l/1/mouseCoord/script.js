var mouseLog = document.querySelector('.pos');

document.addEventListener('mousemove', logKey);
function logKey(e) {
    mouseLog.innerText = `
      Screen X/Y: ${e.screenX}, ${e.screenY}
      Client X/Y: ${e.clientX}, ${e.clientY}`;
}


var clickOut = document.querySelector('.clickEvent');
document.addEventListener('mousedown', function(e) {
    switch(e.which) {
        case 1:
            clickOut.textContent = "Нажата левая кнопка мыши";
            break;
        case 2:
            clickOut.textContent = "Нажата средняя кнопка мыши";
            break;
        case 3:
            clickOut.textContent = "Нажата правая кнопка мыши";
            break;
    }
})