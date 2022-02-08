import {
  choisesDom,
  gameDom,
  gamePlayAgainBtnDom,
  gameResultDom,
  housePickDom,
  scoreDom,
} from "./elements";
import { RULES } from "./constants";
const generateRandomNumber = () => {
  let random = (Math.random() * 10).toFixed(0);
  while (random > 4) {
    random = (Math.random() * 10).toFixed(0);
  }
  return parseInt(random);
};

let score = 0;
const gameState = {
  win: false,
  lose: false,
  draw: false,
};

choisesDom.forEach((choise) => {
  choise.addEventListener("click", (event) => {
    const random = generateRandomNumber();
    const [userChoise, userChoiseOptions] = Object.entries(RULES).find(
      ([key]) => event.currentTarget.classList.contains(`choise__${key}`)
    );
    const [computerChoise, computerChoiseOptions] = Object.entries(RULES).find(
      (_, idx) => idx === random
    );
    Object.entries(RULES).forEach(([key, value]) => {
      Object.keys(gameState).forEach((key) => {
        gameState[key] = false;
      });
      if (userChoiseOptions.beats.find((beat) => beat === computerChoise)) {
        gameState.win = true;
      } else if (
        computerChoiseOptions.beats.find((beat) => beat === userChoise)
      ) {
        gameState.lose = true;
      } else {
        gameState.draw = true;
      }
    });
    gameState["win"] && score++;
    gameState["lose"] && score--;
    scoreDom.innerHTML = score;
    const [currentGameState] = Object.entries(gameState).find(
      ([_, value]) => value
    );
    gameResultDom.innerHTML = `you ${currentGameState}`;
    housePickDom.appendChild(RULES[computerChoise].dom);
    event.currentTarget.classList.add("choise__your-pick");
    gameDom.classList.add("game-picked");
  });
});
gamePlayAgainBtnDom.addEventListener("click", (event) => {
  gameDom.classList.remove("game-picked");
  choisesDom.forEach((choise) => {
    choise.classList.remove("choise__your-pick");
    housePickDom.innerHTML = "";
  });
});
