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
  });
  