//logic to get computer choice
// we want to get random choice from computer
//the choice should be from rock paper scissor
//lets divide the problem
//lets write the logic to get the computer to choose 
//rock.
// algorithm

// 1.Declare a getComputerChoice function
function getComputerChoice() {


    // 2.Declare a result variable to a math-function returning value between 1-10;
    let result = Math.floor((Math.random() * 10) + 1);
    console.log(result);
    // 3.If result is smaller than 4 then return "Rock";
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

// function showTenTimes() {
//     for (i = 0; i < 10; i++) {
//         console.log(getComputerChoice());
//     }
// }

// showTenTimes();