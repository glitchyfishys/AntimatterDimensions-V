import { PurchasableMechanicState } from "./puchasable";

/**
 * @abstract
 */
export class BitPurchasableMechanicState extends PurchasableMechanicState {
  /**
   * @abstract
   */
  get bits() { throw new NotImplementedError(); }

  /**
   * @abstract
   */
  set bits(value) { throw new NotImplementedError(); }

  /**
   * @abstract
   */
  get bitIndex() { throw new NotImplementedError(); }

  get isBought() {
    const m = 2 ** (this.bitIndex + 1);
    if(this.bits == 0 ) {return false};
    return ((this.bits % m) >= m;
  }

  set isBought(value) {
    const m = 2 ** (this.bitIndex + 1);
    if (value) {
      this.bits |= m;
    } else {
      this.bits &= ~m;
    }
  }
}
