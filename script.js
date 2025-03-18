// Show an alert when the page loads
window.onload = function() {
    alert("Welcome to my portfolio website!");
};

// Function to change background color
function changeBackground() {
    let colors = ["#ffcc00", "#ff5733", "#33ff57", "#3399ff", "#ff33a8"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Form validation function
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
