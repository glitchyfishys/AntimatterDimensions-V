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
    return ((this.bits % this.bitIndex) >= (2 ** this.bitIndex)) !== 0;
  }

  set isBought(value) {
    if (value) {
      this.bits |= (this.bits % this.bitIndex);
    } else {
      this.bits &= ~(this.bits % this.bitIndex);
    }
  }
}
