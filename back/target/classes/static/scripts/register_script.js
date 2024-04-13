document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // To check if password match in both fields
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Logging details to console
  console.log("Full Name:", fullname);
  console.log("Email:", email);
  console.log("Password:", password);

  fetch('http://localhost:8081/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      password: password
    })
  })
    .then(response => {
      if (response.status === 200) {
        console.log("Registration successful");
        window.location.href = "http://localhost:8081/";
      } else {
        console.log("Registration failed");
      }
    })
    .catch(error => {
      console.error('Error registering:', error);
    });
});
