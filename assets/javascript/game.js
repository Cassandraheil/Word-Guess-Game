window.onload = function() {

    var games = ["windwaker", "breathofthewild", "ocarinaoftime", "majorasmask", "linksawakening", "twilightprincess", "skywardsword"];
    var pickedgame = games[Math.floor(Math.random()* games.length)];
    var wordLength = document.getElementById("answer");
    wordLength = [];



   
   for (var i = 0; i < pickedgame.length; i++){
       wordLength[i] = "_"
       console.log(wordLength[i]);
   }

    var answer = document.getElementById("answer");
    answer.textContent = wordLength.join(" ");


    var attemptsLeft = 10;
    var questionindex = document.getElementById("questionindex");
    questionindex.textContent = "attempts left: " + attemptsLeft


    document.onkeyup = function(event) {
         var guess = event.key.toLowerCase()
         console.log(guess)

        attempsLeft = questionindex
        

                         
            var userguess = document.getElementById("userguess") 
            var guessed = "";
            for (var i = 0; i < pickedgame.length; i++){
              
             guessed = guess + guessed;
            }
             userguess.append(guess)

               
            
            
            
            for (var i = 0; i < pickedgame.length; i++){
                if (pickedgame[i] === guess){
                    answer.textContent = wordLength.join(" ");
                    console.log("match found")
                    wordLength[i]= guess
                    // wordLength.splice(wordLength[i], 1, guess)
                    console.log(wordLength[i])      
                  

}             
                }
                };
            // if (wordlength[i].indexOf(guess) == -1){
            //         console.log("wrong")
            //         attemptsLeft -= 1;          // i only want it to happen once 
            //        console.log(attemptsLeft)
            //         }

                 /// need to get this to show up on page
                    
                // }
                // if (attemptsLeft === 0){
                //      console.log{"you loose"}        // put a reset
                        
                // }
    }     

    //

    // i was not able to get the attempts to go down when a wrong letter
        // was chosen
    // didn't get to show the user when they won the game
    // wasn't able to get the reset with a new word working because i 
        //couldn't get to the previous steps
    // i have some code started on the attempts part of this, but they 
        //break my code so I commented it out
    //i added style to break apart the frustration i was having with the 
        //javascript part. It made me less mad that i was getting something 
        //done at least
           
        
    
 


