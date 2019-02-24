// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
var id = getQueryStringValue('id');

let cardDiv = document.getElementById('cardDetails');


fetch('https://api.magicthegathering.io/v1/cards')


.then(function(result){
    return result.json()
})

.then(function(cardgame){
     
        //create cards code
                
        for (let i = cardgame.cards.length - 1; i>=0; i--) { 

                if( cardgame.cards[i].id === id ){
                    
                const h2 = document.createElement('h2');
                h2.textContent = cardgame.cards[i].name;
                cardDiv.appendChild(h2); 

                const images = document.createElement('img');
                images.src = cardgame.cards[i].imageUrl;
                images.setAttribute('width','100%');
                document.getElementById('cardImage').appendChild(images);

                const p1 = document.createElement('div');
                p1.textContent = " About: " + cardgame.cards[i].text;
                cardDiv.appendChild(p1);

                const p2 = document.createElement('div');
                p2.textContent = " Rarity: " + cardgame.cards[i].rarity;
                cardDiv.appendChild(p2);

                const p3 = document.createElement('div');
                p3.textContent =" Color: " + cardgame.cards[i].colors;
                cardDiv.appendChild(p3);
                }
            
            };
            
    
});//2nd then statement
