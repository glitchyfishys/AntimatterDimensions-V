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
    return (this.bits & (1 << this.bitIndex)) !== 0;
  }

 bit(value) {
  return (this.bits % this.bitIndex) < (2 ** this.bitIndex)
}
  
  set isBought(value) {
    if (value) {
      bit(value);
    } else {
      this.bits &= ~(1 << this.bitIndex);
    }
  }
}
