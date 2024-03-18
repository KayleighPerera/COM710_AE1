// Function to change language based on selection
function changeLanguage() {
  var language = document.getElementById("language").value;

  // Redirect to the corresponding language version of the page
  switch (language) {
    case "es":
      window.location.href = "spanish.html"; // Redirect to Spanish version
      break;
    default:
      window.location.href = "about.html"; // Redirect to English version (default)
      break;
  }
}

// Add event listener to language selector dropdown
document
  .getElementById("language")
  .addEventListener("change", changeLanguage);
