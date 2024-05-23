// gets the contactForm from form.html
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    var mobileNumberInput = document.getElementById("mobilenumber").value;

    // Regular expression to match exactly 11 digits
    // /^\d{11}$/
    // ^: Denotes the start of the string.
    // \d: Represents any digit from 0 to 9.
    // {11}: Specifies that the preceding \d should match exactly 11 times.
    // $: Denotes the end of the string.
    var mobileNumberPattern = /^\d{11}$/;

    // this suggests that mobile number on form.html should be 11 digits
    if (!mobileNumberPattern.test(mobileNumberInput)) {
      alert("Mobile number must be 11 digits long.");
      event.preventDefault(); // Prevent form submission
    }
  });

// gets the element from form.html contactForm
document
  .getElementById("contactForm")
  // adds an event listener
  .addEventListener("submit", function (event) {
    // grabs both password and confirm password from form.html
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    // if password is not equal to confirm password an alert sign will show up
    if (password !== confirm_password) {
      alert("Passwords do not match");
      event.preventDefault(); //prevents form submission
    }
  });

// gets the contactForm from form.html
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // gets the varible password from the form
    var passwordInput = document.getElementById("password").value;
    // formula for validation:
    // (?=.*\d) - At least one digit.
    // (?=.*[a-z]) - At least one lowercase letter.
    // (?=.*[A-Z]) - At least one uppercase letter.
    // (?=.*[!@#$%^&*()_+|~\-=?<>.,]) - At least one special character.
    // .{8,} - At least 8 characters in length.
    var passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-=?<>.,]).{8,}$/;

    // if password is incorrect an alert message will appear
    if (!passwordPattern.test(passwordInput)) {
      alert(
        "password must be longer than 8 digits, including one capital letter, one small character and one special character."
      );
      event.preventDefault(); // Prevent form submission
    }
  });
