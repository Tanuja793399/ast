function login() {
    // Retrieve values from the login form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct (you should replace this with your authentication logic)
    // For simplicity, we'll use local storage, but in a real app, use a server and database
    var storedPassword = localStorage.getItem(username);
    
    if (password === storedPassword) {
        alert("Login successful!");
        return true; // Allow the form submission
    } else {
        alert("Invalid username or password");
        return false; // Prevent the form submission
    }
}

function register() {
    // Retrieve values from the registration form
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Store the new user's information (you should replace this with your registration logic)
    // For simplicity, let's use local storage, but in a real app, use a server and database
    localStorage.setItem(newUsername, newPassword);

    alert("Registration successful! You can now log in.");
    return true; // Allow the form submission
}

