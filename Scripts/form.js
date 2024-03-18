document.getElementById("contactForm").addEventListener("submit", function (event) {
    var mobileNumberInput = document.getElementById("mobilenumber").value;

    // Regular expression to match exactly 11 digits
    // /^\d{11}$/
    // ^: Denotes the start of the string.
    // \d: Represents any digit from 0 to 9.
    // {11}: Specifies that the preceding \d should match exactly 11 times.
    // $: Denotes the end of the string.
    var mobileNumberPattern = /^\d{11}$/;

    if (!mobileNumberPattern.test(mobileNumberInput)) {
      alert("Mobile number must be 11 digits long.");
      event.preventDefault(); // Prevent form submission
    }
  });


document.getElementById("contactForm").addEventListener("submit", function(event){
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    // if password is not equal to confirm password an alert sign will show up
    if (password !== confirm_password) {
        alert("Passwords do not match");
        event.preventDefault(); //prevents form submission
    }
})
