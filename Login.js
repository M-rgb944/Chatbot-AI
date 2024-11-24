// Login.js

// Attach an event listener to the login form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the values from the input fields
    const username = document.getElementById("usr").value.trim();
    const password = document.getElementById("password").value;
  
    // Basic validation to check if fields are filled
    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }
  
    // Simulated authentication check (replace with actual server authentication logic)
    if (username === "Student" && password === "pass123") {
      alert("Login successful!");
      console.log("User logged in:", username);
      // Redirect to the main page or dashboard
      window.location.href = "Interface.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  