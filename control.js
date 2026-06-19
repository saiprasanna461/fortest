<!DOCTYPE html>
<html>
<head>
    <title>Login Validation</title>
</head>
<body>

<h2>Login Form</h2>

<form onsubmit="return validateForm()">
    <label>Email:</label><br>
    <input type="text" id="email"><br><br>

    <label>Password:</label><br>
    <input type="password" id="password"><br><br>

    <input type="submit" value="Login">
</form>

<p id="error" style="color:red;"></p>

<script>
function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error");

    // Email regex pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Password regex (min 6 chars, 1 uppercase, 1 number)
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!email.match(emailPattern)) {
        errorMsg.innerHTML = "Invalid email format!";
        return false;
    }

    if (!password.match(passwordPattern)) {
        errorMsg.innerHTML = "Password must be at least 6 characters, include 1 uppercase letter and 1 number!";
        return false;
    }

    alert("Login Successful!");
    return true;
}
</script>

</body>
</html>
