function loginAdmin() {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {

        alert("Login Successful!");

        window.location.href = "admin.html";

    }

    else {

        alert("Invalid Username or Password!");

    }

    return false;

}