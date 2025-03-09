// Handle login process with Firebase
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Login Successful!");
                // After login, redirect to home page
                window.location.href = "home.html";
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Error: " + errorMessage);
            });
    } else {
        alert("Please fill in both fields.");
    }
}


/* Extra options */
.extra-options {
    margin-top: 20px;
}

.extra-options a {
    color: #1877f2;
    font-size: 14px;
    text-decoration: none;
}

.extra-options p {
    font-size: 14px;
    color: #606770;
}

.extra-options a:hover {
    text-decoration: underline;
}
