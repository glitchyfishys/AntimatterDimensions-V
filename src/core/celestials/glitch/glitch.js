import { GameDatabase } from "../../secret-formula/game-database";
import { Quotes } from "../quotes";
import { GlitchRifts } from "./glitchrift";

export const glitch = {
  displayName: "Glitch",
  possessiveName: "Glitch's",
  get isUnlocked() {
    return GlitchRifts.gamma.milestones[5].effectOrDefault(0) == 0 ? false : true;
  },
  initializeRun(layer = 0) {
    if(layer == 0){
      player.celestials.glitch.run = true;
      player.celestials.teresa.run = true;
      player.celestials.effarig.run = true;
      player.celestials.enslaved.run = true;
      player.celestials.v.run = true;
      player.celestials.ra.run = true;
      player.celestials.laitela.run = true;
    }

    
  },
  leaveRun() {
    player.celestials.glitch.run = false;

    
  },
  get isRunning() {
    return player.celestials.glitch.run;
  },
  quotes: Quotes.glitch,
  symbol: "ὡ",
};
