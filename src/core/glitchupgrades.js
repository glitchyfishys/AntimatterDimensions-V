import { BitPurchasableMechanicState, RebuyableMechanicState } from "./game-mechanics";

class GlitchRealityUpgradeState extends BitPurchasableMechanicState {
  constructor(config) {
    super(config);
    this.registerEvents(config.checkEvent, () => this.tryUnlock());
  }

  get automatorPoints() {
    return this.config.automatorPoints ? this.config.automatorPoints : 0;
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
    return Currency.riftForce;
  }

  get bitIndex() {
    return this.id;
  }

  get bits() {
    return player.celestials.glitch.upgrades.broughtbits;
  }

  set bits(value) {
    player.reality.upgradeBits = value;
  }

  get isAvailableForPurchase() {
    return (player.celestials.glitch.upgrades.unlockbits & (1 << this.id)) !== 0;
  }

  get isPossible() {
    return this.config.hasFailed ? !this.config.hasFailed() : true;
  }

  onPurchased() {

  }

  tryUnlock() {
    if (!this.config.checkRequirement()) return;
    player.celestials.glitch.upgrades.unlockbits |= (1 << this.id);
    GameUI.notify.error(`You've unlocked ${this.config.name} from Glitch's Reality`);
  }
  
}

class RebuyableGlitchRealityUpgradeState extends RebuyableMechanicState {
  get currency() {
    return Currency.riftForce;
  }

  get boughtAmount() {
    return player.celestials.glitch.upgrades.rebuyable[this.id];
  }

  set boughtAmount(value) {
    player.celestials.glitch.upgrades.rebuyable[this.id] = value;
  }
}

GlitchRealityUpgradeState.index = mapGameData(
  GameDatabase.celestials.glitchRealityUpgrades,
  config => (config.id < 5
    ? new RebuyableGlitchRealityUpgradeState(config)
    : new GlitchRealityUpgradeState(config))
);

/**
 * @param {number} id
 * @return {RealityUpgradeState|RebuyableRealityUpgradeState}
 */
export const GlitchRealityUpgrade = id => RealityUpgradeState.index[id];

export const GlitchRealityUpgrades = {
  /**
   * @type {(RealityUpgradeState|RebuyableRealityUpgradeState)[]}
   */
  all: GlitchRealityUpgradeState.index.compact(),
  get allBought() {
    return (player.celestials.glitch.upgrades.broughtbits >> 6) + 1 === 1 << (GameDatabase.celestials.glitchRealityUpgrades - 4);
  }
};
