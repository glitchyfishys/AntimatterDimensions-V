<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";
import HintText from "@/components/HintText";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

export default {
  name: "preinfinityupgradebutton",
  components: {
    PrimaryToggleButton,
    DescriptionDisplay,
    EffectDisplay,
    HintText
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAvailableForPurchase: false,
      isBought: false,
      isPossible: false,
      canBeLocked: false,
      hasRequirementLock: false,
    };
  },
  computed: {
    config() {
      return this.upgrade.config;
    },
    classObject() {
      return {
        "c-reality-upgrade-btn--useless": this.pelle,
        "c-reality-upgrade-btn--bought": this.isBought && !this.pelle,
        "c-reality-upgrade-btn--unavailable": !this.isBought && this.isAvailableForPurchase,
        "c-reality-upgrade-btn--possible": !this.isAvailableForPurchase && this.isPossible,
        "c-reality-upgrade-btn--locked": !this.isAvailableForPurchase && !this.isPossible,
      };
    },
    requirementConfig() {
      return {
        description: this.config.requirement
      };
    },
    pelle() {
      return this.upgrade.isUseless && Pelle.isDoomed;
    },
  },
  methods: {
    update() {
      const upgrade = this.upgrade;
      this.isAvailableForPurchase = upgrade.isAvailableForPurchase;
      this.automatorPoints = this.config.automatorPoints;
      this.canBeBought = upgrade.canBeBought;
      this.isBought = upgrade.isBought;
      this.isPossible = upgrade.isPossible;
      this.canBeLocked = upgrade.config.canLock;
    },
  }
};
</script>

<template>
  <div class="l-spoon-btn-group">
    <button
      :class="classObject"
      class="l-reality-upgrade-btn c-reality-upgrade-btn">
      <HintText
        type="realityUpgrades"
        class="l-hint-text--reality-upgrade c-hint-text--reality-upgrade">
        {{ config.name }}
      </HintText>
      <span :class="{ 'o-pelle-disabled': pelle }">
        <DescriptionDisplay :config="config" />
        <template v-if="($viewModel.shiftDown === isAvailableForPurchase)">
          <br>
          <DescriptionDisplay
            :config="requirementConfig"
            label="Requirement:"
            class="c-reality-upgrade-btn__requirement"
          />
        </template>
        <template v-else>
          <EffectDisplay
            :config="config"
            br
          />
        </template>
      </span>
    </button>

  </div>
</template>

<style scoped>

</style>
