
var wins = document.getElementById("#wins")
var losses = document.getElementById("#losses")
var questionindex = document.getElementById("#questionindex")
var userguess = document.getElementById("#userguesses")
var answer = document.getElementById("#answer")

var windwaker = ["w", "i", "n", "d", "w", "a", "k", "e", "r"]
var breathOfTheWild = ["b", "r", "e", "a", "t", "h", "o", "f", "t", "h", "e", "w", "i", "l", "d"]
var ocarinaOfTime = ["o", "c", "a", "r", "i", "n", "a", "o", "f", "t", "i", "m", "e"]
var majorasMask = ["m", "a", "j", "o", "r", "a", "s", "m", "a", "s", "k"]
var linksAwakening = ["l", "i", "n", "k", "s", "a", "w", "a", "k", "e", "n", "i", "n", "g"]
var twilightPrincess = ["t", "w", "i", "l", "i", "g", "h", "t", "p", "r", "i", "n", "c", "e", "s", "s"]
var skywardSword = ["s", "k", "y", "w", "a", "r", "d", "s", "w", "o", "r", "d",]

var spaces = "_"

var games = [windwaker, breathOfTheWild, ocarinaOfTime, majorasMask, linksAwakening, twilightPrincess, skywardSword];


// var wordlengths =["_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _"]





//make the spaces, pick whats on the page, make a function excute when pg loads and when win/loss
 document = fuction(event) {
    for (var i = 0; i <games.length; i++){
    }
    .textcontent = spaces * games[i].length
 }


document.onkeyup = function(event) {
    var guess = event.key
    console.log(guess)

    for (var i = 0; i <games.length; i++){
        console.log(games[i]) 
        if (guess === games[i]){
            console.log("match found")
            alert("great guess")
            answer.textContent = guess


            //have match appear on screen
            //that letter to appear under userguesses
        }
        else {
            //letter to appear under userguesses
            //question index down by one

        }
    }

    //object.textContent = event.key;

    //     document.getElementsByName(questionindex)(questionindex + i);  }
        

    userguess.textContent = "Your guess's so far ..." + guess
    questionindex.textContent = "attempts left ..." + questionindex 
    wins.textContent = "you got it right " + wins + " times"
    losses.textContent = "you failed " + losses + " times" 
}




