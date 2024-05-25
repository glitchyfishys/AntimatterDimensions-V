import { GameDatabase } from "../../secret-formula/game-database";
import { Quotes } from "../quotes";
import { GlitchRifts } from "./glitchrift";

export const glitch = {
  displayName: "Glitch",
  possessiveName: "Glitch's",
  get isUnlocked() {
    return GlitchRifts.gamma.milestones[5].effectOrDefault(0) == 0 ? false : true;
  },
  initializeRun() {
    player.celestials.glitch.run = true;
  },
  get isRunning() {
    return player.celestials.glitch.run;
  },
  quotes: Quotes.glitch,
  symbol: "ὡ",
};
