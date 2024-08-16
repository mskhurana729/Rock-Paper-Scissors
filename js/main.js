// 1. Declare a getComputerChoice function
function getComputerChoice() {


    // 2. Declare a result variable to a math-function returning value between 1-10;
    let result = Math.floor((Math.random() * 10) + 1);
    console.log(result);
    // 3. If result is smaller than 4 then return "Rock";
    if (result < 4) {
        return "Rock";
        // 4. If result is bigger than 3 and smaller than 7 return "Paper"
    } else if (3 < result && result < 7) {
        return "Paper";
        //5. If result is bigger than 7 and smaller or equal to 10 return "Scissor"
    } else if (7 <= result && result <= 10) {
        return "Scissors";
    }
}
//1. Declare getHumanChoice function
function getHumanChoice() {
    //Set keepGoing to true.
    let keepGoing = true;
    //While keep going is true
    while (keepGoing) {
        //2. Set result variable equal to prompt function telling user to choose 1 for rock,2 for Paper and 3 for Scissors.

        let result = prompt("1.Write 1 to choose Rock \n 2. Write 2 to choose Paper \n 3. Write 3 to choose Scissors");
        //3. Change the result type to number.
        result = +result;
        //4. If result is equal to 1 return "Rock";

        if (result === 1) {
            //Set keepGoing to False.
            keepGoing
            return "Rock";
            //5. If result is equal to 2 return Paper;
        } else if (result === 2) {
            //Set keepGoing to False.
            keepGoing = false;
            return "Paper";
            //6. If result is equal to 3 return Scissors;
        } else if (result === 3) {
            //Set keepGoing to False.
            keepGoing = false;
            return "Scissors";
            //7.Else return "Please choose from the given options:1,2,3)"
        } else {
            console.log(keepGoing);
            console.log("Please choose from the given options:1,2,3");
        }
    }
}

// function showGame() {
//     console.log(getHumanChoice());
//     console.log(getComputerChoice());
// }

// showGame();