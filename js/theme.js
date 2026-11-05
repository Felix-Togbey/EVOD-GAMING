// Select the theme toggle button
const themeToggle = document.querySelector("#themeToggle");

// Add a click event
themeToggle.addEventListener("click", () => {

    // Toggle the light-mode class on the body
    document.body.classList.toggle("light-mode");

    // Update the button text
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☾";
    }
    else {
        themeToggle.textContent = "☼";
    }

});