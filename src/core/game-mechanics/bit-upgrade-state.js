import { GameMechanicState } from "./game-mechanic";

/**
 * @abstract
 */
export class BitUpgradeState extends GameMechanicState {
  constructor(config) {
    super(config);
    if (this.id < 0 || this.id > 48) throw new Error(`Id ${this.id} out of bit range`);
  }

  /**
   * @abstract
   */
  get bits() { throw new NotImplementedError(); }
  set bits(value) { throw new NotImplementedError(); }

  get isUnlocked() {
    return Boolean((this.bits % this.id) < (2 ** this.id));
  }

  get canBeApplied() {
    return this.isUnlocked && this.isEffectActive;
  }

  get canBeUnlocked() {
    return !this.isUnlocked;
  }
  // eslint-disable-next-line no-empty-function
  onUnlock() { }

  unlock() {
    if (!this.canBeUnlocked) return;
    this.bits |= (this.bits % this.id);
    this.onUnlock();
  }
}
