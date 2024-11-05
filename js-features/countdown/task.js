const countDown = function () {
    const countDownEl = document.getElementById("timer");
    countDownEl.textContent -= 1;
    if(countDownEl.textContent <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(inervalID);
    }
}

const inervalID = setInterval(countDown, 1000);