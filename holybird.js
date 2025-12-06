function validateLogin() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    
    var errorElement = document.getElementById("error-msg");
    var loginContainer = document.querySelector(".login-container");

    if (usernameInput === '123' && passwordInput === '123') {
        window.location.href = "home.html";
    } else {
        errorElement.style.display = "block";
        errorElement.innerText = "Incorrect Username or Password";
        
        loginContainer.classList.add("shake-animation");
        
        setTimeout(() => {
            loginContainer.classList.remove("shake-animation");
        }, 400);
    }
}