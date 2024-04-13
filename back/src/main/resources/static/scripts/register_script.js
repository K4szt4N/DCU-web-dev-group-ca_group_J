function registerUser(event) {
  event.preventDefault();
  console.log("Registering user");
  const f_name = document.getElementById("f_name").value;
  const l_name = document.getElementById("l_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const user_role = document.getElementById("user_role").value;

  // To check if password match in both fields
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  fetch('http://localhost:8081/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      f_name: f_name,
      l_name: l_name,
      email: email,
      password: password,
      user_role: user_role
    })
  })
    .then(response => {
      if (response.status === 201) {
        alert("Registration successful");
        console.log("Registration successful");
        window.location.href = "http://localhost:8081/";
      } else {
        alert("Registration failed");
        console.log("Registration failed");
      }
    })
    .catch(error => {
      console.error('Error registering:', error);
    });
}
