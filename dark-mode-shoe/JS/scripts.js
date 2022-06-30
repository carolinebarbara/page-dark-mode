const changeThemeBtn = document.querySelector("#change-theme")

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

//Load user theme preference
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
    toggleDarkMode();

    //Save user theme preference
    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
})