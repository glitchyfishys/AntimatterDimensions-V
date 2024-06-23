import { BitUpgradeState } from "../game-mechanics";
import { GameDatabase } from "../secret-formula/game-database";

import { DC } from "../constants";

import { Quotes } from "./quotes";

export const EFFARIG_STAGES = {
  INFINITY: 1,
  ETERNITY: 2,
  REALITY: 3,
  COMPLETED: 4,
  OVERRIDE: 5
};

export const Effarig = {
  displayName: "Effarig",
  possessiveName: "Effarig's",
  initializeRun() {
    clearCelestialRuns();
    player.celestials.effarig.run = true;
    recalculateAllGlyphs();
    Tab.reality.glyphs.show(false);
  },
  get isRunning() {
    return player.celestials.effarig.run;
  },
  get currentStage() {
    if (!EffarigUnlock.infinity.isUnlocked) {
      return EFFARIG_STAGES.INFINITY;
    }
    if (!EffarigUnlock.eternity.isUnlocked) {
      return EFFARIG_STAGES.ETERNITY;
    }
    if (!EffarigUnlock.reality.isUnlocked) {
      return EFFARIG_STAGES.REALITY;
    }
    return EFFARIG_STAGES.COMPLETED;
  },
  get currentStageName() {
    switch (this.currentStage) {
      case EFFARIG_STAGES.INFINITY:
        return "Infinity";
      case EFFARIG_STAGES.ETERNITY:
        return "Eternity";
      case EFFARIG_STAGES.REALITY:
        return "Reality";
        case EFFARIG_STAGES.OVERDRIVE:
        return "Overdrive";
      default:
        return "Overdrive";
    }
  },
  get eternityCap() {
    return this.isRunning && this.currentStage === EFFARIG_STAGES.ETERNITY ? DC.E50 : undefined;
  },
  get glyphLevelCap() {
    switch (this.currentStage) {
      case EFFARIG_STAGES.INFINITY:
        return 100;
      case EFFARIG_STAGES.ETERNITY:
        return 1500;
      case EFFARIG_STAGES.REALITY:
        return 2000;
        case EFFARIG_STAGES.OVERDRIVE:
        return 15000;
      default:
        return 15000;
    }
  },
  get uniqueglyphs() {
    let c = 0;
    if (Glyphs.activeWithoutCompanion.filter(g => generatedTypes.includes(g.type)).filter(k => k.type == "power" ).length > 0) c+=4;
    if (Glyphs.activeWithoutCompanion.filter(g => generatedTypes.includes(g.type)).filter(k => k.type == "time" ).length > 0) c+=4;
    if (Glyphs.activeWithoutCompanion.filter(g => generatedTypes.includes(g.type)).filter(k => k.type == "infinity" ).length > 0) c+=4;
    if (Glyphs.activeWithoutCompanion.filter(g => generatedTypes.includes(g.type)).filter(k => k.type == "dilation" ).length > 0) c+=4;
    if (Glyphs.activeWithoutCompanion.filter(g => generatedTypes.includes(g.type)).filter(k => k.type == "replication" ).length > 0) c+=4;
    if (Glyphs.activeWithoutCompanion.filter(g => generatedTypes.includes(g.type)).filter(k => k.type == "effarig" ).length > 0) c+=7;
    if (Glyphs.activeWithoutCompanion.filter(g => !generatedTypes.includes(g.type)).filter(k => k.type == "reality" ).length > 0) c+=4;
    if (Glyphs.activeWithoutCompanion.filter(g => !generatedTypes.includes(g.type)).filter(k => k.type == "cursed" ).length > 0) c+=4;
    if (Glyphs.activeWithoutCompanion.filter(g => !generatedTypes.includes(g.type)).filter(k => k.type == "glitch" ).length > 0) c+=4;
    return c;
  },
  get glyphEffectAmount() {
    return this.uniqueglyphs;
  },
  get shardsGained() {
    if (!TeresaUnlocks.effarig.canBeApplied) return DC.D0;
    let shards = Decimal.pow(Currency.eternityPoints.exponent / 7500, this.glyphEffectAmount).floor().mul(AlchemyResource.effarig.effectValue);
    
    return shards.div(player.reality.glyphs.createdRealityGlyph ? 1 : 100); //better for glyphs
  },
  get maxRarityBoost() {
    return 5 * Math.log10(Decimal.log10(Currency.relicShards.value.add(10)));
  },
  nerfFactor(power) {
    let c;
    switch (this.currentStage) {
      case EFFARIG_STAGES.INFINITY:
        c = 1500;
        break;
      case EFFARIG_STAGES.ETERNITY:
        c = 29.29;
        break;
      case EFFARIG_STAGES.REALITY:
        c = 29.29;
      break;
        case EFFARIG_STAGES.OVERDRIVE:
        c = 12.5;
        break;
      default:
        c = 12.5;
        break;
    }
    return 3 * (1 - c / (c + Math.sqrt(power.pLog10())));
  },
  get tickDilation() {
    return Math.min(0.7 + 0.1 * this.nerfFactor(Currency.timeShards.value), 0.9999);
  },
  get multDilation() {
    return Math.min(0.25 + 0.25 * this.nerfFactor(Currency.infinityPower.value), 0.9999);
  },
  get tickspeed() {
    const base = 3 + Tickspeed.baseValue.reciprocal().log10();
    return Decimal.pow10(Math.pow(base, this.tickDilation)).reciprocal();
  },
  multiplier(mult) {
    const base = new Decimal(mult).pLog10();
    return Decimal.pow10(Math.pow(base, this.multDilation));
  },
  get bonusRG() {
    // Will return 0 if Effarig Infinity is uncompleted
    return Math.floor(replicantiCap().pLog10() / LOG10_MAX_VALUE - 1);
  },
  quotes: Quotes.effarig,
  symbol: "Ϙ"
};

class EffarigUnlockState extends BitUpgradeState {
  get bits() { return player.celestials.effarig.unlockBits; }
  set bits(value) { player.celestials.effarig.unlockBits = value; }

  get cost() {
    return this.config.cost;
  }

  get isEffectActive() {
    return !Pelle.isDisabled("effarig");
  }

  purchase() {
    if (this.isUnlocked || !Currency.relicShards.purchase(this.cost)) return;
    this.unlock();
    this.config.onPurchased?.();
  }
}

export const EffarigUnlock = mapGameDataToObject(
  GameDatabase.celestials.effarig.unlocks,
  config => new EffarigUnlockState(config)
);

EventHub.logic.on(GAME_EVENT.TAB_CHANGED, () => {
  if (Tab.celestials.effarig.isOpen) Effarig.quotes.initial.show();
});

EventHub.logic.on(GAME_EVENT.BIG_CRUNCH_BEFORE, () => {
  if (!Effarig.isRunning) return;
  Effarig.quotes.completeInfinity.show();
});

EventHub.logic.on(GAME_EVENT.ETERNITY_RESET_BEFORE, () => {
  if (!Effarig.isRunning) return;
  Effarig.quotes.completeEternity.show();
});
