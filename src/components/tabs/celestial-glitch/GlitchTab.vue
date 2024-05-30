
<script>
import BlackHoleChargingSliders from "@/components/tabs/black-hole/BlackHoleChargingSliders";
import CelestialQuoteHistory from "@/components/CelestialQuoteHistory";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import GlitchRunButton from "./panel";

export default {
  name: "GlitchTab",
  components: {
    CelestialQuoteHistory,
    PrimaryButton,
    PrimaryToggleButton,
    BlackHoleChargingSliders,
    GlitchRunButton,
  },
  computed: {
    runEffects() {
      return GameDatabase.celestials.descriptions[6].effects().split("\n");
    },
    runDescription() {
      return this.augments;
    },
    isDoomed: () => Pelle.isDoomed,
    
  },
  data: () => ({
    isRunning: false,
    quote: "",
    bits: 0,
    augments: Glitch.activeaugments,
  }),
  methods: {
    update() {
      this.isRunning = Glitch.isRunning;
      this.quote = Glitch.quote;
      this.bits = Glitch.augmenteffectbits;
      this.augments = Glitch.activeaugments;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "glitch'", number: 6 });
    },
    effects(id){
      if ((player.celestials.glitch.augment.effectbits & (1 << id)) > 0) player.celestials.glitch.augment.effectbits &= ~(1 << id);
      else player.celestials.glitch.augment.effectbits |= (1 << id);
    },
    activeaugment(id){
      return Glitch.augmenteffectactive(id);
    },
    test() {
      return {
        "o-enslaved-shop-button--bought": this.isRunning,
        "o-primary-btn--subtab-option": !this.isRunning
      };
    },
  },
};
</script>

<template>
  <div class="l-glitch-celestial-tab">
   work in progress
    
  <CelestialQuoteHistory celestial="glitch"/>
    
    <GlitchRunButton />

    <div>
    <PrimaryButton
      class="o-primary-btn--subtab-option"
      @click="effects(0)">
      
      <p v-if="activeaugment(0)">
        remove Teresa's Reality
      </p>
      <p v-else>
        enable Teresa's Reality
      </p>
      
    </PrimaryButton>

    <PrimaryButton
    class="o-primary-btn--subtab-option"
    @click="effects(1)">
      
    <p v-if="activeaugment(1)">
      remove Effarig's Reality
    </p>
    <p v-else>
      enable Effarig's Reality
    </p>

    </PrimaryButton>

      glitch's reality effects {{runDescription}}
    </div>
    
    <BlackHoleChargingSliders />
    
  </div>
</template>

<style scoped>

.l-glitch-tab {
  margin-top: 1rem;
}
</style>
