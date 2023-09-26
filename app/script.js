$(document).ready(function () {
  const profile = [];
  const btnSubmit = $("#submitbtn");
  btnSubmit.click(function (e) {
    const email = $("#email").val();
    const password = $("#password").val();
    if (!email) {
      alert("Enter valid EmailId");
    } else if (password.length < 8) {
      alert("Password must be minimum 8 charcters ");
    } else {
      if (IsEmail(email) == true) {
        if (IsPassword(password) == true) {
          const item = {
            id: new Date().getTime(),
            email: email,
            password: password,
          };
          profile.push(item);
          console.log(profile);
        } else {
          alert(
            "Invalid Password, Password must contain anyone of the following symbols !#$^ and alphabets"
          );
        }
      } else {
        alert("Invalid EmailId");
      }
    }
  });
  function IsEmail(email) {
    var regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  function IsPassword(password) {
    var regex = /^(?=.*[\!\#\$\^])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;
    if (!regex.test(password)) {
      return false;
    } else {
      return true;
    }
  }
});

//!#$^
