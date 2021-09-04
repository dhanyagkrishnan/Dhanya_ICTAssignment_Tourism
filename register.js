uname=document.getElementById("uname");
lname=document.getElementById("lname");
phoneno=document.getElementById("phoneno")
password=document.getElementById("password");
email=document.getElementById("email");
error=document.getElementById("error");

function validate()
{
    
    if(uname.value==""||lname.value==""||email.value==""||password.value==""||phoneno.value=="")
    {
        error.innerHTML="All fields are mandatory";
        error.style.color="red";
        return false;
        
    }
    else 
    {
        return validateEmail();
          
    }

}
function validateEmail()
{
    let regexpmail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]).([a-z]{2,3})(\.[a-z]{2,3}?)$/;
    if(regexpmail.test(email.value)==false)
    {
        error.innerHTML="Email should be in correct format";
        error.style.color="red";
        return false;
     
        
    }
    else 
    {
      
       return  validatePhoneno();
        
    }

}
function validatePhoneno()
    {
       
        let regexpphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(regexpphone.test(phoneno.value))
          {
            return validatePassword();
          }
          else{
            error.innerHTML="PhoneNo should be in correct format";
            error.style.color="red";
            return false;

          }
}

function validatePassword()
{
    
    let regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/; 
    if(regexppwd.test(password.value))
    {
        
       
        return true;
    }
    else{
        error.innerHTML="Password should contain one uppercase one lowercase and one number";
        error.style.color="red";
        return false;
    }
}
    