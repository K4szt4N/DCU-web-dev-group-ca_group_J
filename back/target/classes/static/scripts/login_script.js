function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`http://localhost:8081/auth/login?f_name=${email}&password=${password}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      if (response.status === 200) {
        console.log("Login successful");
        alert("Login successful");
        window.location.href = "http://localhost:8081/";
      } else {
        alert("Login failed");
        console.log("Login failed");
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
    });
}
