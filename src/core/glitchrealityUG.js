import { BitPurchasableMechanicState, RebuyableMechanicState } from "./game-mechanics";

class realityUGState extends BitPurchasableMechanicState {
  constructor(config) {
    super(config);
    this.registerEvents(config.checkEvent, () => this.tryUnlock());
  }

  get name() {
    return this.config.name;
  }

  get shortDescription() {
    return this.config.shortDescription ? this.config.shortDescription() : "";
  }

  get requirement() {
    return typeof this.config.requirement === "function" ? this.config.requirement() : this.config.requirement;
  }

  get lockEvent() {
    return typeof this.config.lockEvent === "function" ? this.config.lockEvent() : this.config.lockEvent;
  }

  get currency() {
    return Currency.antimatter;
  }

  get bitIndex() {
    return this.id;
  }

  get bits() {
    return player.glitch.reality.upgradebits;
  }

  set bits(value) {
    player.glitch.reality.upgradebits = value;
  }

  get isPossible() {
    return this.config.hasFailed ? !this.config.hasFailed() : true;
  }
  
  get isAvailableForPurchase() {
    return (player.glitch.reality.upgradebits & (1 << this.id)) !== 0;
  }

  get isUseless() {
    if(typeof this.config.isUseless != "undefined") return (this.config.isUseless() && Pelle.isDoomed)
    return false;
  }
  
  tryUnlock() {
    if (!this.config.checkRequirement()) return;
    player.glitch.reality.upgradebits |= (1 << this.id);
    GameUI.notify.error(`You've unlocked glitched reality Upgrade: ${this.config.name}`);
  }

  onPurchased() {
    const id = this.id;
    console.log(id)
  }
}

realityUGState.index = mapGameData(
  GameDatabase.glitch.realityUG,
  config => (new realityUGState(config))
);

export const realityUG = id => realityUGState.index[id];

export const realityUGs = {
  all: realityUGState.index.compact(),
  get allBought() {
    return (player.glitch.reality.upgradeBits >> 1) + 1 === 1 << (GameDatabase.glitch.realityUG.length);
  }
};
