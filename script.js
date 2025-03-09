function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Just a mock-up alert, simulating a successful login
    if (email && password) {
        alert("Login successful! (This is just a mockup, no real data is collected.)");
    } else {
        alert("Please fill in both fields.");
    }
}
