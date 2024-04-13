document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log("Email:", email);
  console.log("Password:", password);

  fetch('http://localhost:8081/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(response => {
      if (response.status === 200) {
        console.log("Login successful");
        window.location.href = "http://localhost:8081/";
      } else {
        console.log("Login failed");
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
    });
});