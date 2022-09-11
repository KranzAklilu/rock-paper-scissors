import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

const createImg = (elm) => {
  const img = document.createElement("img");
  const allSvgs = { paper, scissors, rock, lizard, spock };
  console.log(allSvgs, elm);
  img["src"] = allSvgs[elm];
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
