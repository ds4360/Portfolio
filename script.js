// =========================
// THEME BUTTON
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});


// =========================
// LOAD SAVED THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "🌙";

}


// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// =========================
// CLOSE MOBILE MENU
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});