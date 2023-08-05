var choices = ["Rock", "Paper", "Scissors"];
var choice = choices[Math.floor(Math.random()*choices.length)];

function getComputerChoice(){
    return choice 
}

console.log(getComputerChoice)

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  
  get_random([2,3,5])