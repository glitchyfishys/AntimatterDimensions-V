import { GameDatabase } from "../secret-formula/game-database";
import { Quotes } from "./quotes";

export const glitch = {
  displayName: "Glitch",
  possessiveName: "Glitch's",
  rifts: "",
  get isUnlocked() {
    return true;
  },
  initializeRun() {
    player.celestials.glitch.run = true;
  },
  get isRunning() {
    return player.celestials.glitch.run;
  },
  quotes: Quotes.glitch,
  symbol: "ὡ"
};
