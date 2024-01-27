function validateSignUpForm() {
    // Get form inputs
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var accountType = document.querySelector('input[name="accountType"]:checked');
    var address = document.getElementById("address").value;

    // Validation checks (add more as needed)
    if (fullname === "" || email === "" || username === "" || password === "" || !accountType || address === "") {
        displayErrorMessage("All fields must be filled out.");
        return false;
    }

    // Additional validation checks (e.g., email format, password strength, etc.)
    // ...

    // If all validation passes, return true to submit the form
    return true;
}

function displayErrorMessage(message) {
    var errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = message;
}
