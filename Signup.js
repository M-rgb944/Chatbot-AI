// Signup.js

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Validate inputs
  if (!username || !email || !password || !confirmPassword) {
    alert("All fields are required.");
    return;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Check password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Password strength check (optional)
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  alert("Sign-up successful!");
  // Simulate form submission
  console.log({
    username,
    email,
    password,
  });

  // Clear form
  document.getElementById("signupForm").reset();
});
