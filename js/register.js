function ValidateEmailLogin(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
    }
    else {
        alert("You have entered an invalid email address!");
        document.login.email.focus();
        event.preventDefault();
        return false;
    }
}

function ValidateEmailSignUp(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.register.user_email.focus();
        event.preventDefault();
        return false;
    }
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");
    if (password.length != 0) {
        if (password == confirmPassword) {
            message.textContent = "Password match";
            message.style.backgroundColor = green;
            return true
        }
        else {
            alert("Passowrd doesn't match");
            document.register.confirmPassword.focus();
            event.preventDefault();
            message.textContent = "Password doesn't match";
            message.style.backgroundColor = red;
            return false;
        }
    }

}


function store() {

    var name = document.getElementById("name");
    var usertype = document.getElementById("usertype");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    localStorage.setItem('name', name.value);
    localStorage.setItem('usertype', usertype.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    setTimeout(() => {
        alert('Your account has been created');
    }, 5000);
    alert('Your account has been created');
}


function check() {
    var email = localStorage.getItem("email");
    var storedPw = localStorage.getItem("password");
    var useremail = document.getElementById("email");
    var userPw = document.getElementById("password");
    var f = document.getElementById("login");
    if (useremail.value == email && userPw.value == storedPw) {
        alert('You are logged in.');
        f.setAttribute("action","llogout.html");
        return true;
    } else {
        event.preventDefault();
        alert('Error on login');
        return false;
    }
}