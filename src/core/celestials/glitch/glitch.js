import { GameDatabase } from "../../secret-formula/game-database";
import { Quotes } from "../quotes";
import { GlitchRifts } from "./glitchrift";

export const Glitch = {
  displayName: "Glitch",
  possessiveName: "Glitch's",
  get isUnlocked() {
    return GlitchRifts.gamma.milestones[5].effectOrDefault(0) == 0 ? false : true;
  },

  augmenteffectactive(id = 0){
    return (player.celestials.glitch.augment.effects & (1 << id)) > 0;
  },

  get augmenteffects(){
    return player.celestials.glitch.augment.effects;
  },

  augmenteffects(id = 0){
      if(id == 0) return "Teresa Reality";
      if(id == 1) ? return "Effarig Reality";
      if(id == 2) ? return "Nameless one's Reality";
      if(id == 3) ? return "Nameless one's dim limit";
      if(id == 4) ? return "Nameless one's low tachyon gain";
      if(id == 5) ? return "V's Reality";
      if(id == 6) ? return "Ra's no dim boost";
      if(id == 7) ? return "Ra's static tickspeed";
      if(id == 8) ? return "Lai'tela's Reality";
      return "out of range";
  }

  get activeaugments(){
      let effect = [];
      augmenteffectactive(0) ? effect.push("Teresa Reality") : undefined;
      augmenteffectactive(1) ? effect.push("Effarig Reality") : undefined;
      augmenteffectactive(2) ? effect.push("Nameless one's Reality") : undefined;
      augmenteffectactive(3) ? effect.push("Nameless one's dim limit") : undefined;
      augmenteffectactive(4) ? effect.push("Nameless one's low tachyon gain") : undefined;
      augmenteffectactive(5) ? effect.push("V's Reality") : undefined;
      augmenteffectactive(6) ? effect.push("Ra's no dim boost") : undefined;
      augmenteffectactive(7) ? effect.push("Ra's static tickspeed") : undefined;
      augmenteffectactive(8) ? effect.push("Lai'tela's Reality") : undefined;
      return effect;
  },

  initializeRun() {
    if(this.tier == 0){
      player.celestials.glitch.run = true;
      // active
      augmenteffectactive(0) ?  player.celestials.teresa.run = true : undefined;
      // active
      augmenteffectactive(1) ? player.celestials.effarig.run = true : undefined;
      //active
      augmenteffectactive(2) ? player.celestials.enslaved.run = true : undefined;
      // dim limit
      augmenteffectactive(3) ? player.celestials.enslaved.run = true : undefined;
      // low tachyon gain
      augmenteffectactive(4) ? player.celestials.enslaved.run = true : undefined;
      // active
      augmenteffectactive(5) ? player.celestials.v.run = true : undefined;
      // no dim boost
      augmenteffectactive(6) ? player.celestials.ra.run = true : undefined;
      // static tick speed
      augmenteffectactive(7) ? player.celestials.ra.run = true : undefined;
      // active
      augmenteffectactive(8) ? player.celestials.laitela.run = true : undefined;
    }
    if(this.tier == 1){
      
    }
  },
  leaveRun() {
    player.celestials.glitch.run = false;
    player.celestials.teresa.run = false;
    player.celestials.effarig.run = false;
    player.celestials.enslaved.run = false;
    player.celestials.v.run = false;
    player.celestials.ra.run = false;
    player.celestials.laitela.run = false;
    
  },


  get ADnerf(){
    return 0.5;
  },
  get discription() {
    return GameDatabase.celestials.descriptions[6].effects()
  },
  
  get tier(){
    return player.celestials.glitch.tier;
  },
  get isRunning() {
    return player.celestials.glitch.run;
  },
  quotes: Quotes.glitch,
  symbol: "ὡ",
};
