// ================================
// WAIT FOR PAGE TO LOAD
// ================================

document.addEventListener("DOMContentLoaded", function () {


    // ================================
    // GET ELEMENTS
    // ================================

    const themeButton = document.getElementById("themeButton");

    const menuButton = document.getElementById("menuButton");

    const navLinks = document.getElementById("navLinks");


    // ================================
    // DARK / LIGHT MODE
    // ================================

    if (themeButton) {

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

    }


    // ================================
    // LOAD SAVED THEME
    // ================================

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        if (themeButton) {
            themeButton.textContent = "🌙";
        }

    }


    // ================================
    // MOBILE MENU
    // ================================

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("show");


            // Change menu icon

            if (navLinks.classList.contains("show")) {

                menuButton.textContent = "✕";

            } else {

                menuButton.textContent = "☰";

            }

        });


        // ================================
        // CLOSE MENU AFTER CLICK
        // ================================

        const menuItems = navLinks.querySelectorAll("a");

        menuItems.forEach(function (item) {

            item.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuButton.textContent = "☰";

            });

        });

    }

});