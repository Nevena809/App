function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

let final = createGame();

final.increaseScore(5);
final.increaseScore(9);
final.decreaseScore(3);

console.log(`The score is ${final.getScore()}`);
