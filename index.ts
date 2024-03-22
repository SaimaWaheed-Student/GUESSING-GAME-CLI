#!/user/bin/env/node
import inquirer from "inquirer";
import inquire from "inquirer";
// computer with will generate a random number done
// user inpt for guessing number -done
// comuter user input with computer generated number and show result
const randomNumber=Math.floor(Math.random()*10+1);1


const answer = await inquirer.prompt([
    {
        name :"userGuessedNumber",
        type:"number",
        message:"please guess a number between 1-10:",

    }
])
if(answer.userGuessedNumber === randomNumber){
    console.log("congratulations! you guessed right number.");
    
}else{
    console.log("you guessed wrong number");
    
}

