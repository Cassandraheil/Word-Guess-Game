window.onload = function() {
    var windwaker = ["w", "i", "n", "d", "w", "a", "k", "e", "r"];
    var breathOfTheWild = ["b", "r", "e", "a", "t", "h", "o", "f", "t", "h", "e", "w", "i", "l", "d"];
    var ocarinaOfTime = ["o", "c", "a", "r", "i", "n", "a", "o", "f", "t", "i", "m", "e"];
    var majorasMask = ["m", "a", "j", "o", "r", "a", "s", "m", "a", "s", "k"];
    var linksAwakening = ["l", "i", "n", "k", "s", "a", "w", "a", "k", "e", "n", "i", "n", "g"];
    var twilightPrincess = ["t", "w", "i", "l", "i", "g", "h", "t", "p", "r", "i", "n", "c", "e", "s", "s"];
    var skywardSword = ["s", "k", "y", "w", "a", "r", "d", "s", "w", "o", "r", "d",];



    var games = ["windwaker", "breathOfTheWild", "ocarinaOfTime", "majorasMask", "linksAwakening", "twilightPrincess", "skywardSword"];
    var randomGames = games[Math.floor(Math.random()* games.length)];
    var wordlength = document.getElementById("answer");
    wordLength = [];



   
   for (var i = 0; i < windwaker.length; i++){
       wordLength[i] = "_"
       console.log(wordLength[i]);
   }

    var answer = document.getElementById("answer");
    answer.textContent = wordLength.join(" ");


    
 

    document.onkeyup = function(event) {
         var guess = event.key
         console.log(guess)

        var questionindex = document.getElementById("questionindex");
        var attemptsLeft = 10;
        attempsLeft = questionindex
        questionindex.textContent = "attempts left: " + attemptsLeft
                         
            var userguess = document.getElementById("userguess") 
            var guessed = "";
            for (var i = 0; i < windwaker.length; i++){

                guessed.push(guess); ///don't know why this won't work for me -.-
             guessed = guess +guessed;
            userguess.textContent = "already guessed: " + guess  /// cannot get it to keep guesses on page

               
            
            
            
            
                if (windwaker[i] === guess){
                    console.log("match found")
                    guess === wordLength[i]
                    

                };
                if (guess.indexOf(windwaker) == -1){
                    console.log("wrong");
                    attemptsLeft -= 1; 
                    console.log(attemptsLeft) /// need to get this to show up on page
                    if (attemptsLeft === 0){
                        alert("you loose")
                    }

                }
            }
        


            // else {
            //     console.log("wrong")
            //     userguess.textContent = event.key
                
            //     questionindex.textContent = "attempts left ..." + questionindex + -i
            //     console.log(questionindex)
            // }
            
        }
    }
 



//     document.getElementsByName(questionindex)(questionindex - 1);  
// // Function to render questions.                         to move onto the next question-translate to next array i guess
// function renderQuestion() {
//     // If there are still more questions, render the next one.
//     if (questionIndex <= (questions.length - 1)) {
//       document.querySelector("#question").innerHTML = questions[questionIndex].q;
//     }
//     // If there aren't, render the end game screen.
//     else {
//       document.querySelector("#question").innerHTML = "Game Over!";
//       document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;} s}

