// Show Login Form
        function showLogin() {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registerForm').style.display = 'none';
        }

        // Show Register Form
        function showRegister() {
            document.getElementById('registerForm').style.display = 'block';
            document.getElementById('loginForm').style.display = 'none';
        }

        // Hide forms
        function hideForms() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'none';
        }

        // Handle Login form submission (Basic JavaScript logic)
        function loginSubmit(event) {
            event.preventDefault();
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            let userType = document.getElementById('userType').value;

            // Basic validation and alerts for demo purposes
            if (username && password) {
                alert('Logged in as ' + userType);
                // Handle the login logic here (e.g., API request)
            } else {
                alert('Please fill in all fields');
            }
        }

        // Handle Register form submission (Basic JavaScript logic)
        function registerSubmit(event) {
            event.preventDefault();
            let username = document.getElementById('regUsername').value;
            let password = document.getElementById('regPassword').value;
            let confirmPassword = document.getElementById('confirmPassword').value;

            if (password === confirmPassword) {
                alert('Registered successfully');
                // Handle the registration logic here (e.g., API request)
            } else {
                alert('Passwords do not match');
            }
        }