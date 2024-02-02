const letsPlay = (handSign) => {
  const ComputerChoices = ["✊", "✋", "✌️"];
  const computerRandom =
    ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];
  let winner = document.getElementById("winner");
  let user = document.getElementById("user");
  let comp = document.getElementById("comp");

  if (handSign == "✊" && computerRandom == "✌️") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "Good job, you win!";
  } else if (computerRandom == "✋" && handSign == "✊") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "You lost scrub get gud";
  } else if (handSign == "✊" && computerRandom == "✊") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "It's a tie!";
  } else if (handSign == "✋" && computerRandom == "✊") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "Good job, you win!";
  } else if (computerRandom == "✌️" && handSign == "✋") { 
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "You lost scrub get gud";
  } else if (handSign == "✋" && computerRandom == "✋") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "It's a tie!";
  } else if (handSign == "✌️" && computerRandom == "✋") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "Good job, you win!";
  } else if (computerRandom == "✊" && handSign == "✌️") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "You lost scrub get gud";
  } else if (handSign == "✌️" && computerRandom == "✌️") {
    user.innerText = handSign;
    comp.innerText = computerRandom;
    winner.innerText = "It's a tie!";
  }
};
