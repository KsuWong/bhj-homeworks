const img = document.getElementById("cookie")
const clicker = document.getElementById("clicker__counter")

img.onclick = function () {
    let clicks = clicker.textContent++;
    if (clicks % 2 == 0) {
        cookie.width = 300;
        cookie.height = 300;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
    console.log(count)
}


clicker.onclick = function () {
    clicker.textContent = Number(clicker.textContent) += 1;
}   