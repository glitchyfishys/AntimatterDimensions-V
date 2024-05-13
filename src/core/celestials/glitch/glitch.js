import { GameDatabase } from "../../secret-formula/game-database";
import { Quotes } from "../quotes";
import { Rifts } from "./GlitchRifts"

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
  rifts: Rifts,
  quotes: Quotes.glitch,
  symbol: "ὡ"
};
