// Get form elements
const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");


// Add default value to username input
usernameInput.value = "Default Value";

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page refresh
  alert("Form submitted!");
});

// Add click listener to submit button
submitButton.addEventListener("click", function () {
  alert(`Entered username: ${usernameInput.value}`);
});

// if theres any bugs i did not catch please let me know?

