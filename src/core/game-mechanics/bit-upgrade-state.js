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
    const m = 2 ** (this.id + 1);
    return Boolean((this.bits % m) >= m);
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
    const m = 2 ** (this.bitIndex + 1);
    if (!this.canBeUnlocked) return;
    this.bits |= m;
    this.onUnlock();
  }
}
