// refer to question 4 before development starts for scope document
document.getElementById("submitContact").addEventListener("click",submitForm);

function submitForm(){

    

        let regExName = /^[a-zA-Z]+$/; 
        let regExPhone = /^[0-9]{3,}[.-\s][0-9]{3,}[.-\s][0-9]{4}$/
        let regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/; 
            
    
    
        let FirstName = document.getElementById("firstName").value;
        let LastName = document.getElementById("lastName").value; 
        let Phone = document.getElementById("phone").value; 
        let Email = document.getElementById("email").value; 
        
        
    (function verifyFirstName(){
        if(FirstName.match(regExName)){
            
            return true; 
        }
        else
        {
            
            document.getElementById("firstNameError").style.display = "inline"; 
            return("False"); 
        }    
    })();
    
    (function verifyLastName(){
    
        if(LastName.match(regExName)){
            
            return true;
        }
        else
        {
            
            document.getElementById("lastNameError").style.display = "inline"; 
            return false;
        }
    })();    
    
    (function verifyPhone(){
    
        if(Phone.match(regExPhone)){
            
            return true;
            
        }
        else
        {
            
            document.getElementById("phoneError").style.display = "inline"; 
            return false;
        }
    })();
    
    (function verifyEmail(){
    
        if(Email.match(regExEmail)){
            
            return true;
        }
        else
        {
            
            document.getElementById("emailError").style.display = "inline"; 
            return false; 
        }
    })();  
    
    


   
};






