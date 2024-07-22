<script>
import { Laitela } from "@/core/globals";

import SliderComponent from "@/components/SliderComponent";

export default {
  name: "BlackHoleChargingSliders",
  components: {
    SliderComponent
  },
  data() {
    return {
      isNegativeBHUnlocked: false,
      isInverted: false,
      isLaitela: false,
      negativeSlider: 0,
      negativeBHDivisor: 1,
      maxNegativeBlackHole: 300,
      isDisabled: false,
      lowermax: false,
      isValid: true,
      isFocused: false,
      actualValue: -Decimal.log10(player.blackHoleNegative),
      displayValue: (-Decimal.log10(player.blackHoleNegative)).toString(),
    };
  },
  computed: {
    infoTooltip() {
      return this.isLaitela
        ? "The physics of this Reality do not allow Black Hole Inversion"
        : "Black Hole must be paused to activate Inversion";
    },
    reqLockText() {
      return `Inversion strength cannot be modified due to Lock for
        "${ImaginaryUpgrade(24).name}"`;
    },
    typeFunctions() {
      const functions = AutobuyerInputFunctions["float"];
      if (functions === undefined) {
        throw new Error("Unknown autobuyer input type");
      }
      return functions;
    },
    validityClass() {
      return this.isValid ? undefined : "o-autobuyer-input--invalid";
    }
  },
  methods: {
    update() {
      this.isNegativeBHUnlocked = V.isFlipped && BlackHoles.arePermanent;
      this.isInverted = BlackHoles.areNegative;
      this.isLaitela = Laitela.isRunning;
      this.negativeSlider = -Decimal.log10(player.blackHoleNegative);
      this.negativeBHDivisor = Decimal.pow10(this.negativeSlider);
      const maxInversion = player.requirementChecks.reality.slowestBH.lte(1e-300);
      this.isDisabled = ImaginaryUpgrade(24).isLockingMechanics && Ra.isRunning && maxInversion;
      this.maxNegativeBlackHole = (GlitchSpeedUpgrades.all[0].isBought ? 1e100 : 300);
      this.lowermax = GlitchSpeedUpgrades.all[0].isBought;

      if (this.isFocused) return;
      this.updateDisplayValue();
      
    },
    adjustSliderNegative(value) {
      this.negativeSlider = value;
      player.blackHoleNegative = Decimal.pow(10, -this.negativeSlider);
      player.requirementChecks.reality.slowestBH = Decimal.max(
        player.requirementChecks.reality.slowestBH,
        player.blackHoleNegative
      );
    },
    adjustInput(value) {
      if(Number.parseFloat(value)) {value = 1; this.isValid = false}
      else this.isValid = true; 

      this.negativeSlider = value;
      player.blackHoleNegative = Decimal.pow(10, -this.negativeSlider);
      player.requirementChecks.reality.slowestBH = Decimal.max(
        player.requirementChecks.reality.slowestBH,
        player.blackHoleNegative);
        
      this.isFocused = false;
      event.target.blur();
    },
    areEqual(value, other) {
      if (other === undefined || value === undefined) return false;
      return this.typeFunctions.areEqual(value, other);
    },
    updateDisplayValue() {
      this.displayValue = this.typeFunctions.formatValue(this.actualValue);
    },
    handleInput(event) {
      const input = event.target.value;
      this.displayValue = input;
      if (input.length === 0) {
        this.isValid = false;
        return;
      }
      const parsedValue = this.typeFunctions.tryParse(input);
      this.isValid = parsedValue !== undefined;
      this.actualValue = this.typeFunctions.copyValue(parsedValue);
    },
    handleFocus() {
      this.isFocused = true;
    },
    handleChange(event) {
      if (this.isValid) {
        this.negativeSlider = this.typeFunctions.copyValue(this.actualValue);
        player.blackHoleNegative = Decimal.pow(10, -this.negativeSlider);
        player.requirementChecks.reality.slowestBH = Decimal.max(
          player.requirementChecks.reality.slowestBH,
          player.blackHoleNegative);
      } else {
        this.updateDisplayValue();
      }
      this.updateDisplayValue();
      this.isValid = true;

      this.isFocused = false;
      event.target.blur();
    },
    sliderProps(negative) {
      return {
        min: 0,
        max: (negative ? this.maxNegativeBlackHole : 990),
        interval: 1,
        width: "55rem",
        tooltip: false
      };
    },
  }
};
  
  export const AutobuyerInputFunctions = {
  decimal: {
    areEqual: (value, other) => Decimal.eq(value, other),
    formatValue: value => Notation.scientific.format(value, 2, 2),
    copyValue: value => new Decimal(value),
    tryParse: input => {
      if (!input) return undefined;
      try {
        let decimal;
        if (/^e\d*[.]?\d+$/u.test(input.replaceAll(",", ""))) {
          // Logarithm Notation
          decimal = Decimal.pow10(parseFloat(input.replaceAll(",", "").slice(1)));
        } else if (/^\d*[.]?\d+(e\d+)?$/u.test(input.replaceAll(",", ""))) {
          // Scientific notation; internals of break-infinity will gladly strip extraneous letters before parsing, but
          // since this is largely uncommunicated to the user, we instead explicitly check for formatting and reject
          // anything that doesn't fit as invalid
          decimal = Decimal.fromString(input.replaceAll(",", ""));
        } else if (/^\d*[.]?\d+(e\d*[.]?\d+)?$/u.test(input.replaceAll(",", ""))) {
          // "Mixed scientific notation" - inputs such as "2.33e41.2" cause buggy behavior when fed directly into
          // Decimal.fromString, so we parse out the mantissa and exponent separately before combining them
          const regex = /(?<mantissa>\d*[.]?\d+)e(?<exponent>\d*[.]?\d+)/u;
          const match = input.replaceAll(",", "").match(regex);
          decimal = Decimal.pow10(Math.log10(Number(match.groups.mantissa)) + Number(match.groups.exponent));
        } else {
          return undefined;
        }
        return isNaN(decimal.mantissa) || isNaN(decimal.exponent) ? undefined : decimal;
      } catch (e) {
        return undefined;
      }
    }
  },
  float: {
    areEqual: (value, other) => value === other,
    formatValue: value => Notation.scientific.format(value, 2, 2),
    copyValue: value => value,
    tryParse: input => {
      const float = parseFloat(input);
      return isNaN(float) ? undefined : float;
    }
  },
  int: {
    areEqual: (value, other) => value === other,
    formatValue: value => Notation.scientific.format(value, 2, 2),
    copyValue: value => value,
    tryParse: input => {
      if (!input) return undefined;
      // We explicitly check formatting here instead of letting parseInt handle the whole thing because otherwise the
      // fact that parseInt removes extraneous letters means junk like "361ebqv3" registers as valid and parses as 361
      if (!/^\d+$/u.test(input.replaceAll(",", ""))) return undefined;
      const int = parseInt(input, 10);
      return isNaN(int) || !Number.isInteger(int) ? undefined : int;
    }
  }
};
</script>

<template>
  <div>
    <div
      v-if="isNegativeBHUnlocked"
      class="l-black-hole-sliders"
    >
      <b>
        Inverted Black Hole divides game speed by {{ format(negativeBHDivisor, 2, 2) }}.
        (Currently {{ isInverted ? "active" : "inactive" }}<span
          v-if="negativeSlider !== 0 && !isInverted"
          :ach-tooltip="infoTooltip"
        >
          <i class="fas fa-question-circle l-margin-left" />
        </span>)
      </b>
      
      <SliderComponent
        v-if="!isDisabled && !lowermax"
        v-bind="sliderProps(true)"
        :value="negativeSlider"
        @input="adjustSliderNegative($event)"
      />

      <input
        v-else-if="!isDisabled && lowermax"
        :value="displayValue"
        :class="validityClass"
        min="0"
        type="number"
        class="o-autobuyer-input"
        @change="handleChange"
        @focus="handleFocus"
        @input="handleInput"
      >
      
      <div
        v-else
        class="l-lock-text"
      >
        {{ reqLockText }}
      </div>
      
      <br>
      Inverting the Black Hole only affects its own speedup, no other upgrades or effects, although
      it will also indirectly affect the Effarig Game speed power effect.
    </div>
  </div>
</template>

<style scoped>
.l-black-hole-sliders {
  width: 55rem;
  color: var(--color-text);
}

.l-margin-left {
  margin-left: 0.5rem;
}

.l-lock-text {
  font-weight: bold;
  color: var(--color-bad);
  margin: 0.5rem 0 -0.5rem;
}
</style>
