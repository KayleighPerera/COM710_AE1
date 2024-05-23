// JavaScript code to update visitor count
window.onload = function () {
  updateVisitorCount();
};

function updateVisitorCount() {
  // Check if localStorage is supported
  if (typeof Storage !== "undefined") {
    // gets the item visitor count from each page
    var count = localStorage.getItem("visitorCount");
    // Check reloaded add one person
    if (count) {
      count = parseInt(count);
      count++;
    } else {
      count = 1;
    }
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").textContent = count;
  } else {
    // No web storage support
    console.log("Sorry! Your browser does not support web storage...");
  }
}

// Function to change language based on selection
function changeLanguage() {
  var language = document.getElementById("language").value;

  // Redirect to the corresponding language version of the page
  switch (language) {
    case "es":
      window.location.href = "spanish"; // Redirect to Spanish version
      break;
    case "fr":
      window.location.href = "french"; // Redirect to french version
      break;
    default:
      window.location.href = "/"; // Redirect to English version (default)
      break;
  }
}

// Add event listener to language selector dropdown
document.getElementById("language").addEventListener("change", changeLanguage);
