```javascript
// ================================
// DARK / LIGHT MODE
// ================================

const themeButton = document.getElementById("themeButton");


// Check if button exists

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");


        // Light Mode

        if (document.body.classList.contains("light-mode")) {

            themeButton.textContent = "🌙";

            localStorage.setItem("theme", "light");

        }


        // Dark Mode

        else {

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
```
