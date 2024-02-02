const letsPlay = (handSign) => {
  const ComputerChoices = ["✊", "✋", "✌️"];
  const computerRandom =
    ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];
  let winner = document.getElementById("winner");
  let user = document.getElementById("user");
  let comp = document.getElementById("comp");

  user.innerText = handSign;
  comp.innerText = computerRandom;

  if (handSign == "✊" && computerRandom == "✌️") {
    winner.innerText = "Good job, you win!";
  } else if (computerRandom == "✋" && handSign == "✊") {
    winner.innerText = "You lost!";
  } else if (handSign == "✊" && computerRandom == "✊") {
    winner.innerText = "It's a tie!";
  } else if (handSign == "✋" && computerRandom == "✊") {
    winner.innerText = "Good job, you win!";
  } else if (computerRandom == "✌️" && handSign == "✋") {
    winner.innerText = "You lost!";
  } else if (handSign == "✋" && computerRandom == "✋") {
    winner.innerText = "It's a tie!";
  } else if (handSign == "✌️" && computerRandom == "✋") {
    winner.innerText = "Good job, you win!";
  } else if (computerRandom == "✊" && handSign == "✌️") {
    winner.innerText = "You lost!";
  } else if (handSign == "✌️" && computerRandom == "✌️") {
    winner.innerText = "It's a tie!";
  }

  if (winner.innerText == "Good job, you win!") {
    winner.style.color = "green";
  } else if (winner.innerText == "You lost!") {
    winner.style.color = "red";
  } else if (winner.innerText == "It's a tie!") {
    winner.style.color = "white";
  }
};
