


function showSignUp() {
  event.preventDefault();
    document.getElementById("sign_up").style.display = "block";

  }

  function hideSignUp() {
    event.preventDefault();
    document.getElementById("sign_up").style.display = "none";
  }

  function logIn(event){
    event.preventDefault();
    var login = document.getElementById("login1").value;
    var pass1 = document.getElementById("login2").value;

    console.log("First Name:", login);
    console.log("Last Name:", pass1);
  }
  
  
  function submitForm(event) {
  
    event.preventDefault();
    
    var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;


    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email or Phone Number:", email);
    console.log("Password:", password);
  }