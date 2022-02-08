const query = (className) => document.querySelector(`.${className}`);
const queryAll = (className) => document.querySelectorAll(`.${className}`);

export const scoreDom = query("score");
export const gameDom = query("game");
export const housePickDom = query("choise__house-pick");
export const choisesDom = queryAll("choise");
export const gameResultDom = query("game__result");
export const gamePlayAgainBtnDom = query("game__btn");
