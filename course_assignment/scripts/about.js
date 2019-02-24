// refer to question 3 before development starts for scope document


function fix(){
    var str1 = document.getElementById("aboutText").innerHTML;
    var rep1 = str1.replace(/magic/gi, " something ");
    document.getElementById("aboutText").innerHTML = rep1;
    }
fix();



function clickFunction(){
  
    let toggle = document.getElementById('moreInfoContent'); 

       if(document.getElementById('moreInfoContent').style.display ==='none'){
            toggle.style.display = 'block';
        }
        else{
            toggle.style.display = 'none';
        }
  

};
document.getElementById('moreInfoTrigger').addEventListener('click',clickFunction);