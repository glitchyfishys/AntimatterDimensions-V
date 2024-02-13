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
    if(this.bits == 0 ) {return false};
    return ((this.bits % m) >= (2 ** (this.id + 1))
  }

  set isBought(value) {
    if (value) {
      this.bits |= (2 ** (this.id + 1))
    } else {
      this.bits &= ~(2 ** (this.id + 1))
    }
  }
}
