import { GameDatabase } from "../../secret-formula/game-database";
import { Quotes } from "../quotes";
import { GlitchRifts } from "./glitchrift";

export const glitch = {
  displayName: "Glitch",
  possessiveName: "Glitch's",
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
  symbol: "ὡ",
  rifts: GlitchRifts,
};
