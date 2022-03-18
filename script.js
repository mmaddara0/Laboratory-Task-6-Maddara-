let FName = document.forms["SignUp_Form"]["first"];
let Middle = document.forms["SignUp_Form"]["middle"];
let LName = document.forms["SignUp_Form"]["last"];
let Email = document.forms["SignUp_Form"]["email"];
let FName_error = document.getElementById("name-error");
let Middle_error = document.getElementById("initial-error");
let LName_error = document.getElementById("LastName-error");
let Email_error = document.getElementById("Email-error");
let Invalid_email= document.getElementById("Email-error");
let Mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.getElementById("signupbtn").onclick = function(){
  for( var i = 0, t = document.getElementsByName( "input" ), l = t.length; i < l; i++ )   {
      if( t[i].value && !/^\s+$/.test( t[i].value ) ) {
         return true;
      }
      else{
          FName.style.border = "1px solid red";
          FName_error.textContent = "First Name is required";

          Middle.style.border = "1px solid red";
          Middle_error.textContent = "Middle Initial is required";

          LName.style.border = "1px solid red";
          LName_error.textContent = "Last Name is required";

          Email.style.border = "1px solid red";
          Email_error.textContent = "Email is required";
      }
  }
}

document.getElementById("resetbtn").onclick = function(){
  document.getElementsByName("input").value="";
  FName.style.border = "0";
  Middle.style.border = "0";
  LName.style.border = "0";
  Email.style.border = "0";
  FName_error.textContent = "";
  Middle_error.textContent = "";
  LName_error.textContent = "";
  Email_error.textContent = "";
}

function validate(){
    if(FName.value == ""){
        FName.style.border = "1px solid red";
        FName_error.textContent = "First Name is required";
        FName.focus();
        return false;
    }
    if(Middle.value == ""){
        Middle.style.border = "1px solid red";
        Middle_error.textContent = "Middle Initial is required";
        Middle.focus();
        return false;
    }
    if(LName.value == ""){
        LName.style.border = "1px solid red";
        LName_error.textContent = "Last Name is required";
        LName.focus();
        return false;
    }
   if(Email.value == ""){
        Email.style.border = "1px solid red";
        Email_error.textContent = "Email is required";
        Email.focus();
        return false;
    }
    if(Mail_format.test(email.value) == false){
        Email.style.border = "1px solid red";
        Invalid_email.textContent = "Invalid email format";
        Email.focus();
        return false;
    }
   return alert("Success!");
  }
