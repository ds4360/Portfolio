const themeButton = document.getElementById("themeButton");

themeButton.onclick = function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.innerHTML = "🌙";
    } else {
        themeButton.innerHTML = "☀️";
    }

};
