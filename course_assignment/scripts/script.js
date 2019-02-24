// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
function createlayout(){

let main = document.getElementById("cards");

fetch('https://api.magicthegathering.io/v1/cards')

.then(function(result){
    return result.json()
})

.then(function(cardgame){


       //remove duplicates code start
       for (let i = cardgame.cards.length - 1; i>=0; i--) { 
       
          if(cardgame.cards[i].imageUrl === undefined){

             cardgame.cards.splice(i,1);
            }//if statement end

        } //for loop end
        //remove duplicates code end
       
    //create cards code start
       cardgame.cards.forEach(function(cardgame){

                const col = document.createElement('div');
                col.setAttribute('class','col-sm-4');
                main.appendChild(col);
            
                const card_container = document.createElement('div');
                card_container.setAttribute('class','card-container');
                col.appendChild(card_container);
            
                const h4 = document.createElement('h4');
                h4.textContent = cardgame.name;
                card_container.appendChild(h4); 

                const images = document.createElement('img');
                images.src = cardgame.imageUrl;
                images.setAttribute('width','100%');
                card_container.appendChild(images);

                const a = document.createElement('a');
                a.setAttribute('href','card-specific.html?id='+cardgame.id);
                a.id = cardgame.id;
                a.className = "btn btn-success";
                a.textContent = " View More ";
                card_container.appendChild(a);        
             });//for.each statement
            //create card codes end
    
});//2nd then statement




document.getElementById('searchButton').addEventListener('click',replace);


    

function replace(){

    //removes elements from div
    function erase(){
        var myNode = document.getElementById("cards");
        while (myNode.firstChild) {
         myNode.removeChild(myNode.firstChild);
    
        };
    }
    erase();

 
 fetch('https://api.magicthegathering.io/v1/cards')

   .then(function(result){
    return result.json()
   })

   .then(function(cardgame){

    

        //remove duplicates code below
        for (let i = cardgame.cards.length - 1; i>=0; i--) { 
        
            if(cardgame.cards[i].imageUrl === undefined){

            cardgame.cards.splice(i,1);

            }//end of if statement
            
        }//end of for loop  
    
     let input = document.getElementById('search').value;
     
     //search and filter code below
                    for(let i=0; i<cardgame.cards.length;i++){

                        if( input.toLowerCase() == cardgame.cards[i].name.toLowerCase()){
                            
                                const col = document.createElement('div');
                                col.setAttribute('class','col-sm-4');
                                main.appendChild(col);
                            
                                const card_container = document.createElement('div');
                                card_container.setAttribute('class','card-container');
                                col.appendChild(card_container);
                            
                                const h4 = document.createElement('h4');
                                h4.textContent = cardgame.cards[i].name;
                                card_container.appendChild(h4); 

                                const images = document.createElement('img');
                                images.src = cardgame.cards[i].imageUrl;
                                images.setAttribute('width','100%');
                                card_container.appendChild(images);

                                const a = document.createElement('a');
                                a.setAttribute('href','card-specific.html?id='+cardgame.cards[i].id);
                                a.id = cardgame.cards[i].id;
                                a.className = "btn btn-success";
                                a.textContent = " View More ";
                                card_container.appendChild(a); 
                
                    }//end of if statement
      
                     
                    };//end of for loop
    
    });//2nd then statement

};//end of replace function

};//main function;

createlayout();
