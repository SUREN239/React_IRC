function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'suren' && password === 's') {
        // Redirect to a success page or perform additional actions
        alert('Login successful!');
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
}
