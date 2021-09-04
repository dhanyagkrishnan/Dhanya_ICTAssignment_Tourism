password=document.getElementById("password");
email=document.getElementById("email");
error=document.getElementById("error");
function validate()
{
    
    if(email.value==""||password.value=="")
    {
       
        
        error.innerHTML="All fields are mandatory";
        error.style.color="red";
        return false;
    }
    else 
    {
       return true;
          
    }

}