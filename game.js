let point = 0;

const gamePrediction = (range) => {
  const rndGuess = Math.floor(Math.random() * range + 1);
  console.log(rndGuess);
  


  const playerName = prompt("Please enter username");
  // set cookie
  function setCookie(name, value) {
    document.cookie = `${name}=${value};`;
  }
  const guess = prompt(`Predict a number between 1 and ${range}`);
  const playerGuess = Number(guess);

  if (rndGuess === playerGuess) {
    console.log(`current value of point = ${point}`)
    point = point + 1;
    alert(`${playerName}, you won!, You've scored ${point} point`);
    //point++;
    gamePrediction(range + 1);


  } else {
    point = 0;
    alert(`${playerName}, you lose`);
  }
}
gamePrediction(2);

