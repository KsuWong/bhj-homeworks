<<<<<<< HEAD
const timer = function () {
    const value = document.getElementById("timer");
    value.textContent -= 1;
    if (value.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalID);
    }
}
const intervalID = setInterval(timer, 1000);
=======

>>>>>>> 39435255479506f97ef1af493f951066da39636a
