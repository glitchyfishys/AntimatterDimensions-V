import { BitPurchasableMechanicState, RebuyableMechanicState } from "./game-mechanics";

class preinfinityUGState extends BitPurchasableMechanicState {
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
    return player.glitch.preinfinity.upgradebits;
  }

  set bits(value) {
    player.glitch.preinfinity.upgradebits = value;
  }

  get isPossible() {
    return this.config.hasFailed ? !this.config.hasFailed() : true;
  }
  
  get isAvailableForPurchase() {
    return (player.glitch.preinfinity.upgradebits & (1 << this.id)) !== 0;
  }

  get isUseless() {
    if(typeof this.config.isUseless != "undefined") return (this.config.isUseless() && Pelle.isDoomed)
    return false;
  }
  
  tryUnlock() {
    if (!this.config.checkRequirement()) return;
    player.glitch.preinfinity.upgradebits |= (1 << this.id);
    GameUI.notify.error(`You've unlocked glitched Upgrade: ${this.config.name}`);
  }

  onPurchased() {
    const id = this.id;
    console.log(id)
  }
}

preinfinityUGState.index = mapGameData(
  GameDatabase.glitch.preinfinityUG,
  config => (new preinfinityUGState(config))
);

export const preinfinityUG = id => preinfinityUGState.index[id];

export const preinfinityUGs = {
  all: preinfinityUGState.index.compact(),
  get allBought() {
    return (player.glitch.preinfinity.upgradeBits >> 1) + 1 === 1 << (GameDatabase.glitch.preinfinityUG.length);
  }
};
