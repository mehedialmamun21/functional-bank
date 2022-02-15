document.getElementById('login-submit').addEventListener('click', function () {

    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    // check email and password
    if (userEmail == 'mehedi@gmail.com' && userPass == 'mehedi123') {
        window.location.href = 'banking.html';
    }
});
