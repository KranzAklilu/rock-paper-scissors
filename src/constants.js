const createImg = (elm) => {
  const img = document.createElement("img");
  img["src"] = `../images/icon-${elm}.svg`;
  return img;
};
export const RULES = {
  scissors: {
    dom: createImg("scissors"),
    beats: ["paper", "lizard"],
  },
  rock: {
    dom: createImg("rock"),
    beats: ["scissors", "lizard"],
  },
  paper: { dom: createImg("paper"), beats: ["rock", "spock"] },
  lizard: { dom: createImg("lizard"), beats: ["paper", "spock"] },
  spock: { dom: createImg("spock"), beats: ["scissors", "rock"] },
};
