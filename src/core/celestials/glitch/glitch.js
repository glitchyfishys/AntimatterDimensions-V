import { GameDatabase } from "../../secret-formula/game-database";
import { Quotes } from "../quotes";
import { GlitchRifts } from "./glitchrift";

export const Glitch = {
  displayName: "Glitch",
  possessiveName: "Glitch's",
  get isUnlocked() {
    return GlitchRifts.gamma.milestones[5].effectOrDefault(0) == 0 ? false : true;
  },

  augmenteffectactive(id = 0, force = false){
    if(!this.isRunning && !force) return false;
    return (player.celestials.glitch.augment.effectbits & (1 << id)) > 0;
  },

  get augmenteffectbits(){
    return player.celestials.glitch.augment.effectbits;
  },

  augmenteffects(id = 0){
      if(id == 0) return "Teresa Reality";
      if(id == 1) return "Effarig Reality";
      if(id == 2) return "Nameless one's Reality";
      if(id == 3) return "Nameless one's dim limit";
      if(id == 4) return "Nameless one's low tachyon gain";
      if(id == 5) return "V's Reality";
      if(id == 6) return "Ra's no dim boost";
      if(id == 7) return "Ra's static tickspeed";
      if(id == 8) return "Lai'tela's Reality";
      return "out of range";
  },

  get activeaugments(){
      let effect = [];
      this.augmenteffectactive(0, true) ? effect.push("Teresa Reality") : undefined;
      this.augmenteffectactive(1, true) ? effect.push("Effarig Reality") : undefined;
      this.augmenteffectactive(2, true) ? effect.push("Nameless one's Reality") : undefined;
      this.augmenteffectactive(3, true) ? effect.push("Nameless one's dim limit") : undefined;
      this.augmenteffectactive(4, true) ? effect.push("Nameless one's low tachyon gain") : undefined;
      this.augmenteffectactive(5, true) ? effect.push("V's Reality") : undefined;
      this.augmenteffectactive(6, true) ? effect.push("Ra's no dim boost") : undefined;
      this.augmenteffectactive(7, true) ? effect.push("Ra's static tickspeed") : undefined;
      this.augmenteffectactive(8, true) ? effect.push("Lai'tela's Reality") : undefined;
      return effect;
  },

  initializeRun() {
    if(this.tier == 0){
      player.celestials.glitch.run = true;
      
      this.augmenteffectactive(0) ?  player.celestials.teresa.run = true : undefined;
      
      this.augmenteffectactive(1) ? player.celestials.effarig.run = true : undefined;
      
      this.augmenteffectactive(2) ? player.celestials.enslaved.run = true : undefined;

      this.augmenteffectactive(5) ? player.celestials.v.run = true : undefined;
      
      this.augmenteffectactive(8) ? player.celestials.laitela.run = true : undefined;
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
