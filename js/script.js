/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction()
{
  var x = document.getElementById("navLinks");
  if (x.style.display === "block")
  {
    x.style.display = "none";
  }
  else
  {
    x.style.display = "block";
  }
}

function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat))
  {
    alert("Thank you for joining Bike 4 Louisville!");
    document.signUp.mail.focus();
    return true;
  }
  else
  {
    alert("Please double-check your email address.");
    document.signUp.mail.focus();
    return false;
  }
}
