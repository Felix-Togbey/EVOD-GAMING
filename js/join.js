// Get the event registration dropdown
const eventSelect = document.querySelector("#eventRegistration");

// Get the event parameter from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the selected event
const selectedEvent = urlParams.get("event");

// Select the form
const joinForm = document.querySelector("#joinForm");

// Select the input fields
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const email = document.querySelector("#email");
const favoriteGame = document.querySelector("#favoriteGame");
const terms = document.querySelector("#terms");

// Select the message paragraph
const formMessage = document.querySelector("#formMessage");

// Automatically select the event
if (selectedEvent) {
    eventSelect.value = selectedEvent;
}

joinForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    


    // Check username
    if (usernameValue === "") {

        formMessage.textContent = "Please enter your username.";
        formMessage.style.color = "red";

    }

    // Check email
    else if (!email.checkValidity()) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
    }

    // Check if password is empty
    else if (passwordValue === "") {

        formMessage.textContent = "Please enter a password.";
        formMessage.style.color = "red";

    }

    // Check password length
    else if (passwordValue.length < 8) {

        formMessage.textContent = "Password must contain at least 8 characters.";
        formMessage.style.color = "red";

    }

    // Check if passwords match
    else if (passwordValue !== confirmPasswordValue) {

        formMessage.textContent = "Passwords do not match.";
        formMessage.style.color = "red";

    }

    else if (favoriteGame.value === "") {
        formMessage.textContent = "Please select your favorite game.";
        formMessage.style.color = "red";
    }

    else if (!terms.checked) {
        formMessage.textContent = "You must agree to the terms and conditions.";
        formMessage.style.color = "red";
    }

    // Everything is valid
    else {

        formMessage.textContent = "Your account has been created successfully!";
        formMessage.style.color = "green";

    }

});

